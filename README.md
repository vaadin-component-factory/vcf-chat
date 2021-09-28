# vcf-chat Web Component
[![Published on Vaadin  Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/vaadin-component-factoryvcf-chat)

&lt;vcf-chat&gt; is a Web Component chat implementation with virtual and infinite scroll. vcf-chat uses vcf-avatar to show senders/recippients avatars. New messages apears in a bootom of message list.

[Live Demo ↗](http://incubator.app.fi/chat-demo/chat)

## Usage

```html
  <vcf-chat lazy-load-trigger-offset="300">
    <div class="loading-indicator" slot="loading-indicator">
      Loading..
    </div>
  </vcf-chat>
```

<img src="https://raw.githubusercontent.com/vaadin/incubator-chat/master/screenshot.png" width="500" alt="Screenshot of vcf-chat">


## Installation

This components is distributed as Bower packages.

### Polymer 2 and HTML Imports compatible version

Install `vcf-chat`:

```sh
bower i vaadin/vcf-chat --save
```

Once installed, import it in your application:

```html
<link rel="import" href="bower_components/vcf-chat/vcf-chat.html">
```

## Getting Started

Vaadin components use the Lumo theme by default.

## The file structure for Vaadin components

- `src/vcf-chat.html`

  Unstyled component.

- `theme/lumo/vcf-chat.html`

  Component with Lumo theme.

- `vcf-chat.html`

  Alias for theme/lumo/vcf-chat.html


## Running demos and tests in browser

1. Fork the `vcf-chat` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) installed.

1. When in the `vcf-chat` directory, run `npm install` and then `bower install` to install dependencies.

1. Run `polymer serve --open`, browser will automatically open the component API documentation.

1. You can also open demo or in-browser tests by adding **demo** or **test** to the URL, for example:

  - http://127.0.0.1:8080/components/vcf-chat/demo
  - http://127.0.0.1:8080/components/vcf-chat/test


## Running tests from the command line

1. When in the `vcf-chat` directory, run `polymer test`


## Following the coding style

We are using [ESLint](http://eslint.org/) for linting JavaScript code. You can check if your code is following our standards by running `gulp lint`, which will automatically lint all `.js` files as well as JavaScript snippets inside `.html` files.


## Contributing

  - Make sure your code is compliant with our code linters: `gulp lint`
  - Check that tests are passing: `polymer test`
  - [Submit a pull request](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github) with detailed title and description
  - Wait for response from one of Vaadin components team members


# Vaadin Prime
This component is available in Vaadin Prime subscription. It is still open source, but you need to have a valid CVAL license in order to use it. Read more at: https://vaadin.com/pricing


# License

Apache License 2.0
