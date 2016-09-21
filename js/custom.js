/* fixing hover states on mobile */

$('a').on('click touchend', function(e) {
    var el = $(this);
    var link = el.attr('href');
    window.location = link;
});