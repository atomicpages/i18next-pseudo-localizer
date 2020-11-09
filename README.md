# i18next-pseudo-localizer

## Install

```sh
npm i i18next i18next-pseudo-localizer
```

## Basic Usage

`i18next-pseudo-localizer` has one class export and a ore-constructed variable with all defaults:

```js
import i18next from 'i18next';
import { pseudo } from 'i18next-pseudo-localizer';

i18next.use(pseudo).init({
    // ...,
    postProcess: ['pseudo'],
});
```

### Pass Options

To pass custom options, construct a new instance of `Pseudo`:

```js
import i18next from 'i18next';
import { Pseudo } from 'i18next-pseudo-localizer';

i18next
    .use(
        new Pseudo({
            // pass options
        })
    )
    .init({
        // ...,
        postProcess: ['pseudo'],
    });
```

## Options

In addition to all options supported by [`pseudo-localizer`](https://github.com/atomicpages/pseudo-localizer#options), here are a few extra options:

| Name                | Type       | Default Value | Required | Description                              |
| ------------------- | ---------- | ------------- | -------- | ---------------------------------------- |
| `languagesToPseudo` | `string[]` | `['en']`      | No       | An array of languages to pseudo localize |
| `enabled`           | `boolean`  | `true`        | No       | Set false to disable                     |

```js
import i18next from 'i18next';
import { Pseudo } from 'i18next-pseudo-localizer';

i18next
    .use(
        new Pseudo({
            enabled: process.env.NODE_ENV === 'development',
            languagesToPseudo: ['en-US', 'es-MX'],
            // override pseudo-localizer options
            prefix: '[',
            suffix: ']',
            letterMultiplier: 3,
        })
    )
    .init({
        // ...,
        postProcess: ['pseudo'],
    });
```

## Credits

Heavily inspired by [i18next-pseudo](https://github.com/MattBoatman/i18next-pseudo).
