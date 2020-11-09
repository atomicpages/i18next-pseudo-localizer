import { PostProcessorModule, StringMap, TOptions } from 'i18next';
import { pseudo as pseudoLocalizer, PseudoLocalizerOptions } from 'pseudo-localizer';

export interface I18nPseudoLocalization extends PostProcessorModule {
    readonly options: {
        enabled?: boolean;
        languagesToPseudo?: string[];
    } & PseudoLocalizerOptions;
}

export class Pseudo implements I18nPseudoLocalization {
    name: string;
    type: 'postProcessor';

    options: I18nPseudoLocalization['options'];

    constructor({
        enabled = true,
        languagesToPseudo = ['en-US'],
        ...rest
    }: I18nPseudoLocalization['options'] = {}) {
        this.name = 'pseudo';
        this.type = 'postProcessor';

        this.options = {
            enabled,
            languagesToPseudo,
            ...rest,
        };
    }

    configure(options: I18nPseudoLocalization['options']): void {
        this.options = options;
    }

    process(value: string, key: string, options: TOptions<StringMap>, translator: any): string {
        if (
            (translator.language &&
                !this.options.languagesToPseudo.some(lng => lng === translator.language)) ||
            !this.options.enabled
        ) {
            return value;
        }

        return pseudoLocalizer(value, this.options);
    }
}

export const pseudo = new Pseudo();
