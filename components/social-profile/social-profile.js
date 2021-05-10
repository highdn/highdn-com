import '@polymer/paper-toolbar/paper-toolbar.js'
import '@polymer/paper-header-panel/paper-header-panel.js'
import '@polymer/iron-icons/iron-icons.js'
import '@polymer/paper-icon-button/paper-icon-button.js'
import '@polymer/paper-tabs/paper-tabs.js'
import '@polymer/iron-pages/iron-pages.js'

import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

const _template = html`
<style>
    :host {
        display: block;
        box-sizing: border-box;
    }
    a {
        color: inherit;
        text-decoration: inherit;
    }
    paper-tabs {
        --paper-tabs-selection-bar-color: var(--accent-color);
    }
    paper-tab.iron-selected {
        text-shadow: 0 0 3pt lightgrey;
    }
</style>

<!--paper-toolbar class="medium-tall"-->
    <paper-icon-button src="{{avatar}}"></paper-icon-button>
    <span class="title">{{name}}</span>
    <a href="{{mail}}"><paper-icon-button icon="mail"></paper-icon-button></a>
    <a href="{{payment}}"><paper-icon-button icon="payment"></paper-icon-button></a>

    <paper-tabs selected="{{selected}}" class="bottom self-end" style="width: 300px;">
        <paper-tab>Instagram</paper-tab>
        <paper-tab>Facebook</paper-tab>
        <paper-tab>LinkedIn</paper-tab>
    </paper-tabs>
<!--/paper-toolbar-->

<iron-pages selected="{{selected}}">
    <slot name="instagram">No Instagram</slot>
    <slot name="facebook">No Facebook</slot>
    <slot name="linkedin">No LinkedIn</slot>
</iron-pages>
`;

_template.setAttribute('strip-whitespace', '');

class SocialProfile extends PolymerElement {
  ready() {
    super.ready();
    console.log('social-profile is ready!');
  }
  static get template() {
    return _template;
  }
  static get properties() {
    return {
      name: String,
      avatar: String,
      mail: String,
      payment: String,
      selected: {
        type: Number,
        value: 0,
      },
    }
  }
}

// Associate the new class with an element name
customElements.define('social-profile', SocialProfile);
