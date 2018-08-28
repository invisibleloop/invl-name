// invl: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './invl.core.js';
import {
  MyComponent
} from './invl.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    MyComponent
  ], opts);
}