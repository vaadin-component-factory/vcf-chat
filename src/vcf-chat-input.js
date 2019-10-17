/**
 * @license
 * Copyright (C) 2015 Vaadin Ltd.
 * This program is available under Commercial Vaadin Add-On License 3.0 (CVALv3).
 * See the file LICENSE.md distributed with this software for more information about licensing.
 * See [the website]{@link https://vaadin.com/license/cval-3} for the complete license.
 */

import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin';
import '@vaadin/vaadin-text-field/vaadin-text-area';
import '@vaadin/vaadin-button';

/**
 * `<vcf-chat-input>`
 *
 * ```html
 * <vcf-chat-input></vcf-chat-input>
 * ```
 *
 * @memberof Vaadin
 * @mixes ThemableMixin
 * @demo demo/index.html
 */
class VcfChatInput extends ThemableMixin(PolymerElement) {
  static get template() {
    return html`
      <style>
        :host {
          display: flex;
        }

        [part='input'] {
          flex-grow: 1;
          --lumo-text-field-size: 26px;
          max-height: 100px;
        }

        [part='submit'] {
          margin-left: 10px;
        }
      </style>

      <vaadin-text-area id="input" part="input" placeholder="Type your message" value="{{body}}"></vaadin-text-area>

      <vaadin-button part="submit" on-click="_dispatchNewMessage">
        Send
      </vaadin-button>
    `;
  }

  static get is() {
    return 'vcf-chat-input';
  }

  static get properties() {
    return {
      body: {
        type: String
      }
    };
  }

  ready() {
    super.ready();

    // workaround to set vaadin-text-area's height equal to input's height initially
    this.shadowRoot.querySelector('[part="input"]').focusElement.rows = 1;

    this.$.input.addEventListener('keyup', e => {
      if (e.ctrlKey && e.key === 'Enter') {
        this._dispatchNewMessage();
      }
    });
  }

  _dispatchNewMessage() {
    if (this.body) {
      this.dispatchEvent(
        new CustomEvent('vcf-chat-new-message', {
          bubbles: true,
          composed: true,
          detail: {
            body: this.body
          }
        })
      );
    }
  }

  clearInput() {
    this.body = '';
  }
}

customElements.define(VcfChatInput.is, VcfChatInput);

/**
 * @namespace Vaadin
 */
window.Vaadin.VcfChatInput = VcfChatInput;

if (window.Vaadin.runIfDevelopmentMode) {
  window.Vaadin.runIfDevelopmentMode('vaadin-license-checker', VcfChatInput);
}
