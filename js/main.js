$(".accordion__title").click(function() {
    $(this).toggleClass("active");
});
$(".header__burgir").click(function() {
    $(this).toggleClass("active");
    $(".header__navbar").toggleClass("active");
});