$('.dd_menu').each(function () {

    // Cache the number of options
    var $dropdown = $(this),
        $dropdowns = $('.dd_menu').not(this),
        $dropdownList = $dropdown.find('.dropdown__list'),
        $dropdownText = $dropdown.find('.dropdown__text');
        $dropdownsText = $dropdowns.find('.dropdown__text');

    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $dropdown.on('mouseover', function(e) {
        e.stopPropagation();
        $dropdowns.removeClass('dropdown_opened');
        $dropdowns.find('.dropdown__list').fadeOut(250);
        $dropdownsText.removeClass('red');

        if ($dropdown.hasClass('dropdown_opened')) {
            $dropdownText.addClass('red');

        } else {
            $dropdown.addClass('dropdown_opened');
            $dropdownText.removeClass('red');
            $dropdown.find('.dropdown__list').css('display', 'flex').addClass('dl_open');
        }
    });

    $dropdown.on('click', function(e) {
        e.stopPropagation();
        $dropdowns.removeClass('dropdown_opened');
        $dropdowns.find('.dropdown__list').fadeOut(250);
        $dropdownText.removeClass('red');

        if ($dropdown.hasClass('dropdown_opened')) {
            $dropdownText.addClass('red');

        } else {
            $dropdown.addClass('dropdown_opened');
            $dropdownText.addClass('red');
            $dropdown.find('.dropdown__list').css('display', 'flex').addClass('dl_open');
        }
    });

    // Hides the unordered list when clicking outside of it
    $(document.body).click(function() {
        $dropdown.removeClass('dropdown_opened');
        $dropdownList.fadeOut(250);
        $dropdownText.removeClass('red');
    });

});

$('.dd_filter').each(function () {

    // Cache the number of options
    var $dropdown = $(this),
        $dropdowns = $('.dd_filter').not(this),
        $dropdownList = $dropdown.find('.dropdown__list')

    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $dropdown.on('click', function(e) {
        e.stopPropagation();
        $dropdowns.removeClass('dropdown_opened');
        $dropdowns.find('.dropdown__list').fadeOut(250);

        if ($dropdown.hasClass('dropdown_opened')) {
            //$dropdown.removeClass('dropdown_opened');
            //$dropdown.find('.dropdown__list').slideUp(250);
        } else {
            $dropdown.addClass('dropdown_opened');
            $dropdown.find('.dropdown__list').css('display', 'flex');
        }
    });

    // Hides the unordered list when clicking outside of it
    $(document.body).click( function() {
        $dropdown.removeClass('dropdown_opened');
        $dropdownList.slideUp(150);
    });
});