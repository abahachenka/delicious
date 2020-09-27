import {initHeaderMenu, initHeaderSearch} from '../components/page-header/page-header.js';
import {initPageFooter} from '../components/page-footer/page-footer.js';

$(document).ready(() => {
    initHeaderMenu();
    initHeaderSearch();
    initPageFooter();
});