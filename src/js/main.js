$('.tab-btn').on('click', function () {
    if ($(this).find('svg').attr('data-icon') == 'minus-circle' ) {
        $(this).find('svg').attr('data-icon', 'plus-circle');
    } else {
        $(this).find('svg').attr('data-icon', 'minus-circle');
    };
});

$('.mobile-icon').on('click', function () {
    if ($(this).find('svg').attr('data-icon') == 'times' ) {
        $(this).find('svg').attr('data-icon', 'bars');
        $('.sidebar').addClass('sidebar-off');
        $('.sidebar').removeClass('sidebar-on');
    } else {
        $(this).find('svg').attr('data-icon', 'times');
        $('.sidebar').addClass('sidebar-on');
        $('.sidebar').removeClass('sidebar-off');
    };
});