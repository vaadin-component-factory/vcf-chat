import '@vaadin/vaadin-lumo-styles/color';
import '@vaadin/vaadin-lumo-styles/spacing';
import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';

registerStyles(
  'vcf-avatar-item',
  css`
    :host {
      background: var(--lumo-contrast-50pct);
    }

    :host([image]) {
      background-color: transparent;
    }
  `
);

registerStyles(
  'vcf-chat-message',
  css`
    [part='content'] {
      background: var(--lumo-contrast-5pct);
      border-radius: var(--lumo-border-radius);
    }

    :host([outgoing]) [part='content'] {
      background: var(--lumo-primary-color);
      color: var(--lumo-base-color);
    }
  `
);
