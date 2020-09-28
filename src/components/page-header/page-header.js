import {TABLET_WIDTH} from '../../js/constants';

/**
 * Initializes the top menu event handlers
 */
export function initHeaderMenu() {
    const $pageHeaderBurger = $('.page-header__burger');
    const $pageHeaderMenu = $('.page-header__menu');
    const $body = $('body');

    // toggle menu on burger click
    $pageHeaderBurger.click((e) => {
        $pageHeaderBurger.toggleClass('menu__icon-active');
        $pageHeaderMenu.toggleClass('menu-active');
        $body.toggleClass('lock');
    });

    // close the menu when user clicks outside the menu area
    $(document).mouseup(e => {
        if ($pageHeaderMenu.hasClass('menu-active')
            && !$pageHeaderBurger.is(e.target)
            && !$pageHeaderMenu.is(e.target) // if the target of the click isn't the container...
            && $pageHeaderMenu.has(e.target).length === 0) {// ... nor a descendant of the container

            $pageHeaderMenu.removeClass('menu-active');
            $pageHeaderBurger.removeClass('menu__icon-active');
            $body.removeClass('lock');
        }
    });

    // close the menu when window leaves the mobile breakpoint
    $(window).resize(() => {
        if ($(window).width() >= TABLET_WIDTH ) {
            $pageHeaderMenu.removeClass('menu-active');
            $pageHeaderBurger.removeClass('menu__icon-active');
        }
    });
}

/**
 * Initializes the search event handlers
*/
export function initHeaderSearch() {
    const $searchContainer = $('.page-header__search');
    const searchActiveClass = 'search_active';

    $('.page-header__search-icon').click(e => {
        let isActive = $searchContainer.hasClass(searchActiveClass);

        if (!isActive) {
            let $searchInput = $searchContainer.find('input')[0];

            setTimeout(function() {
                $searchInput.focus();
            }, 100);
        }
        
        $searchContainer.toggleClass(searchActiveClass);
    });

    // Close search panel on clicking outside the panel
    $(document).mouseup(e => {
        if ($searchContainer.hasClass(searchActiveClass)
            && !$searchContainer.is(e.target) // if the target of the click isn't the container...
            && $searchContainer.has(e.target).length === 0) {// ... nor a descendant of the container

            $searchContainer.removeClass(searchActiveClass);
        }
    });
}