import {TABLET_WIDTH} from '../../js/constants';

export function initPageFooter() {
    const $footerMenuColumns = $('.footer-menu__column');

    $footerMenuColumns.click(e => {
        if ($(window).width() < TABLET_WIDTH) {
            $(e.currentTarget)
            .toggleClass('footer-menu__column-active')
            .find('.footer-submenu')
            .toggleClass('footer-submenu_active');
        }
    });
}