import { hidePreloader } from './preloader.js';
import { popup, setPopup } from './popup.js';

popup.init();
window.popup = popup;
window.setPopup = setPopup;

hidePreloader(500);
