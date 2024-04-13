import { defineCustomElement } from "vue";
import TheWelcome from "./components/TheWelcome.ce.vue";

export const TheWelcomeCe = defineCustomElement(TheWelcome);

customElements.define("the-welcome-ce", TheWelcomeCe);
