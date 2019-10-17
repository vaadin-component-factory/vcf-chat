import '@vaadin/vaadin-lumo-styles/color';
import '@vaadin/vaadin-lumo-styles/spacing';
import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';

registerStyles(
  'vaadin-text-area',
  css`
    [part='input-field'] [part='value'][part='value'] {
      align-self: center;
    }
  `
);
