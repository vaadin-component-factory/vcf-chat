# &lt;vcf-chat&gt;

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/vaadin/web-components?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![npm version](https://badgen.net/npm/v/@vaadin-component-factory/vcf-chat)](https://www.npmjs.com/package/@vaadin-component-factory/vcf-chat)
[![Published on Vaadin Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/vaadin-component-factoryvcf-chat)

This is the npm version [vcf-chat](https://github.com/vaadin-component-factory/vcf-chat) developed using Polymer 3.

[Live demo ↗](https://vcf-chat.netlify.com)
|
[API documentation ↗](https://vcf-chat.netlify.com/api/#/elements/Vaadin.VcfChat)

![screenshot](https://user-images.githubusercontent.com/3392815/67006390-b371b600-f0ed-11e9-8e32-459453ff0f7f.png)

## Installation

Install `vcf-chat`:

```sh
npm i @vaadin-component-factory/vcf-chat --save
```

## Usage

Once installed, import it in your application:

```js
import '@vaadin-component-factory/vcf-chat';
```

Add `<vcf-chat>` element to the page.

```html
<vcf-chat lazy-load-trigger-offset="300">
  <div class="loading-indicator" slot="loading-indicator">
    Loading..
  </div>
</vcf-chat>
```

## Running demo

1. Fork the `vcf-chat` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) installed.

1. When in the `vcf-chat` directory, run `npm install` to install dependencies.

1. Run `npm start` to open the demo.

## Contributing

To contribute to the component, please read [the guideline](https://github.com/vaadin/vaadin-core/blob/master/CONTRIBUTING.md) first.

## Vaadin Prime

This component is available in the Vaadin Prime subscription. It is still open source, but you need to have a valid CVAL license in order to use it. Read more at: https://vaadin.com/pricing

## License

Commercial Vaadin Add-on License version 3 (CVALv3). For license terms, see LICENSE.

Vaadin collects development time usage statistics to improve this product. For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
