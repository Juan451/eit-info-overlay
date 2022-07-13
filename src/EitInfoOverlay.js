import { LitElement, html, css } from 'lit';
const icon = html`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`;


export class EitInfoOverlay extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                position: relative;
            }
            .overlay {
                display: none;
                position: absolute;
                background-color: beige;
                padding: 1em;
                border: 1px solid #ddd;
                box-shadow: 0 0 10px rgba(0,0,0,0.2);
                width: 250px;
            }
            .opened {
                display: block;
            }
            ::slotted(div) {
                font-family: sans-serif;
            }
        `
    ];

    static get properties() {
      return {
        opened: { type: Boolean }
      };
    }

    constructor() {
        super();
        console.log('constructor ejecutado...');
        this.opened = false;
    }

    render() {
        return html`
          <a href="#" @click="${this.toggle}">
            <slot name="trigger"></slot>
          </a>
          <div class="overlay ${this.opened ? "opened" : ""}">
            <slot name="menu"></slot>
          </div>
        `;
    }
    toggle(e) {
        this.opened = !this.opened;
        e.stopPropagation();
        e.preventDefault();
    }

    close() {
        console.log('close en menu overlay ',this);
        this.opened = false;
    }

    showClickPosition(e) {
        console.log(`han hecho clic en ${e.clientX} x ${e.clientY} `);
    }
}
