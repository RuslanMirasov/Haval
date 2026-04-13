import { hidePreloader } from './preloader.js';
import { popup } from './popup.js';
import { initSelectArrow } from './select-arrow.js';

popup.init();
window.popup = popup;
initSelectArrow();

hidePreloader(500);
