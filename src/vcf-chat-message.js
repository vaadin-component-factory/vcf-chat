/**
 * @license
 * Copyright (C) 2015 Vaadin Ltd.
 * This program is available under Apache License 2.0
 */

import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin';
import '@vaadin-component-factory/vcf-avatar-item';

/**
 * `<vcf-chat-message>` Web Component chat implementation with virtual and infinite scroll.
 *
 * ```html
 * <vcf-chat-message></vcf-chat-message>
 * ```
 *
 * @memberof Vaadin
 * @mixes ThemableMixin
 * @demo demo/index.html
 */
class VcfChatMessage extends ThemableMixin(PolymerElement) {
  static get template() {
    return html`
      <style>
        :host {
          --vcf-chat-message-avatar-width: 50px;
          --vcf-chat-message-avatar-height: 50px;

          display: flex;
        }

        :host([outgoing]) {
          flex-direction: row-reverse;
        }

        vcf-avatar-item {
          width: var(--vcf-chat-message-avatar-width);
          height: var(--vcf-chat-message-avatar-height);
        }

        [part='content'] {
          padding: 10px;
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          max-width: 60%;
        }

        :host([outgoing]) [part='content'] {
          margin-left: 0;
          margin-right: 10px;
        }

        [part='username'] {
          font-weight: bold;
        }
      </style>

      <vcf-avatar-item name="[[senderName]]" part="avatar" image$="[[avatar]]"></vcf-avatar-item>

      <div part="content">
        <div part="username">
          [[senderName]]
        </div>

        <div part="body">
          [[body]]
        </div>
      </div>
    `;
  }

  static get is() {
    return 'vcf-chat-message';
  }

  static get properties() {
    return {
      body: {
        type: String
      },

      avatar: {
        type: String
      },

      senderName: {
        type: String
      },

      outgoing: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      }
    };
  }
}

customElements.define(VcfChatMessage.is, VcfChatMessage);

/**
 * @namespace Vaadin
 */
window.Vaadin.VcfChatMessage = VcfChatMessage;

if (window.Vaadin.runIfDevelopmentMode) {
  window.Vaadin.runIfDevelopmentMode('vaadin-license-checker', VcfChatMessage);
}
