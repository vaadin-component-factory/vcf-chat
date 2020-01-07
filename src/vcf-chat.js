/**
 * @license
 * Copyright (C) 2015 Vaadin Ltd.
 * This program is available under Commercial Vaadin Add-On License 3.0 (CVALv3).
 * See the file LICENSE.md distributed with this software for more information about licensing.
 * See [the website]{@link https://vaadin.com/license/cval-3} for the complete license.
 */

import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin';
import { ElementMixin } from '@vaadin/vaadin-element-mixin';
import { beforeNextRender } from '@polymer/polymer/lib/utils/render-status.js';
import { Debouncer } from '@polymer/polymer/lib/utils/debounce.js';
import { timeOut } from '@polymer/polymer/lib/utils/async.js';
import '@vaadin/vaadin-license-checker/vaadin-license-checker';
import '@vaadin/vaadin-progress-bar';
import '@polymer/iron-list';
import './vcf-chat-message';
import './vcf-chat-input';

/**
 * `<vcf-chat>` Web Component chat implementation with virtual and infinite scroll.
 *
 * ```html
 * <vcf-chat></vcf-chat>
 * ```
 *
 * @memberof Vaadin
 * @mixes ElementMixin
 * @mixes ThemableMixin
 * @demo demo/index.html
 */
class VcfChat extends ElementMixin(ThemableMixin(PolymerElement)) {
  static get template() {
    return html`
      <style>
        :host {
          display: block;

          --vcf-chat-message-thread-height: 500px;
          --vcf-chat-message-thread-spacing: 10px;
          --vcf-chat-loading-indicator-width: 98%;

          --iron-list-items-container: {
            border-bottom: 10px solid transparent;
          }
        }

        :host ::slotted(*) {
          display: none;
        }

        :host([loading]) ::slotted(*) {
          display: block;
        }

        [part='message'] + [part='message'] {
          padding-top: var(--vcf-chat-message-thread-spacing);
        }

        [part='message-thread-container'] {
          height: var(--vcf-chat-message-thread-height);
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }

        [part='message-thread'] {
          padding: 0 15px;
        }

        [part='message-input'] {
          padding: 5px;
        }

        [part='loading'] {
          text-align: center;
        }
      </style>

      <div id="messageThreadContainer" part="message-thread-container" on-scroll="_triggerLazyLoad">
        <slot name="loading-indicator">
          <vaadin-progress-bar
            indeterminate
            style="width: var(--vcf-chat-loading-indicator-width);"
          ></vaadin-progress-bar>
        </slot>

        <iron-list
          id="messageThread"
          part="message-thread"
          items="[[messages]]"
          scroll-target="messageThreadContainer"
          as="message"
        >
          <template>
            <vcf-chat-message
              part="message"
              body="[[message.body]]"
              sender-name="[[message.senderName]]"
              avatar="[[message.avatar]]"
              outgoing="[[message.currentUser]]"
            >
            </vcf-chat-message>
          </template>
        </iron-list>
      </div>

      <vcf-chat-input id="messageInput" part="message-input"></vcf-chat-input>
    `;
  }

  static get is() {
    return 'vcf-chat';
  }

  static get version() {
    return '1.2.0';
  }

  static get properties() {
    return {
      messages: {
        type: Array,
        value: () => []
      },

      lazyLoadTriggerOffset: {
        type: Number,
        value: 100
      },

      debouncePeriod: {
        type: Number,
        value: 100
      },

      loading: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },

      _scrolledToBottom: {
        type: Boolean,
        value: false
      },

      _firstVisibleItem: {
        type: Object,
        value: () => ({})
      }
    };
  }

  /**
   * @protected
   */
  static _finalizeClass() {
    super._finalizeClass();

    const devModeCallback = window.Vaadin.developmentModeCallback;
    const licenseChecker = devModeCallback && devModeCallback['vaadin-license-checker'];
    if (typeof licenseChecker === 'function') {
      licenseChecker(VcfChat);
    }
  }

  static get observers() {
    return ['_messagesLoaded(messages, messages.splices)'];
  }

  clearInput() {
    this.$.messageInput.clearInput();
  }

  scrollToBottom() {
    this.$.messageThread.scrollToIndex(this.messages.length - 1);

    this._scrolledToBottom = true;
  }

  _messagesLoaded(messages) {
    if (!messages.length) {
      return;
    }

    if (!this._scrolledToBottom) {
      beforeNextRender(this, () => {
        this.scrollToBottom();
      });
    } else if (this._firstVisibleItem) {
      beforeNextRender(this, () => {
        this.$.messageThread.scrollToItem(this._firstVisibleItem);

        this._firstVisibleItem = undefined;
      });
    }
  }

  _triggerLazyLoad() {
    if (this.$.messageThreadContainer.scrollTop <= this.lazyLoadTriggerOffset) {
      this._debouncer = Debouncer.debounce(this._debouncer, timeOut.after(this.debouncePeriod), () => {
        this._firstVisibleItem = this.messages[this.$.messageThread.firstVisibleIndex];

        this.loading = true;
        this.dispatchEvent(
          new CustomEvent('vcf-chat-trigger-lazy-load', {
            bubbles: true,
            composed: true
          })
        );
      });
    }
  }
}

customElements.define(VcfChat.is, VcfChat);

/**
 * @namespace Vaadin
 */
window.Vaadin.VcfChat = VcfChat;
