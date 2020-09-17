$(document).ready(() => {
    initSearchHandlers();
    initTopMenuEventHandlers();

    /**
     * Initializes the top menu event handlers
     */
    function initTopMenuEventHandlers() {
        const $pageHeaderBurger = $('.page-header__burger');
        const $pageHeaderMenu = $('.page-header__menu');
        const $body = $('body');

        // toggle menu on burger click
        $pageHeaderBurger.click((e) => {
            $pageHeaderBurger.toggleClass('page-header__burger-active');
            $pageHeaderMenu.toggleClass('page-header__menu-active');
            $body.toggleClass('lock');
        });

        // close the menu when user clicks outside the menu area
        $(document).mouseup(e => {
            if ($pageHeaderMenu.hasClass('page-header__menu-active')
                && !$pageHeaderBurger.is(e.target)
                && !$pageHeaderMenu.is(e.target) // if the target of the click isn't the container...
                && $pageHeaderMenu.has(e.target).length === 0) {// ... nor a descendant of the container
                
                $pageHeaderMenu.removeClass('page-header__menu-active');
                $pageHeaderBurger.removeClass('page-header__burger-active');
                $body.removeClass('lock');
            }
        });

        // close the menu when window leaves the mobile breakpoint
        $(window).resize(() => {
            if ($(window).width() >= 768 ) {
                $pageHeaderMenu.removeClass('page-header__menu-active');
                $pageHeaderBurger.removeClass('page-header__burger-active');
            }
        });
    }

    /**
     * Initializes the search event handlers
     */
    function initSearchHandlers() {
        const $searchContainer = $('.search');

        $('.search__button').click(e => {
            let isActive = $searchContainer.hasClass('search_active');

            if (!isActive) {
                let $searchInput = $searchContainer.find('.search__input');

                setTimeout(function() {
                    $searchInput.focus();
                }, 100);
            }
            
            $searchContainer.toggleClass('search_active');
        });

        // Close search panel on clicking outside the panel
        $(document).mouseup(e => {
            if ($searchContainer.hasClass('search_active')
                && !$searchContainer.is(e.target) // if the target of the click isn't the container...
                && $searchContainer.has(e.target).length === 0) {// ... nor a descendant of the container
                
                $searchContainer.removeClass('search_active');
            }
         });
    }
});