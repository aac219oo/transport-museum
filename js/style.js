$(document).ready(function () {
    // JavaScript (如果需要關閉下拉選單時消失，請添加以下程式碼)
    $(window).resize(function () {
        var windowWidth = $(window).width();
        if (windowWidth > 1200) {
            $('.dropdown').on('hide.bs.dropdown', function () {
                return false;
            });
        } else {
            $('.dropdown').on('hide.bs.dropdown', function () {
                return true;
            });
        }
    });
    $('.navbar-toggler').on('click', function () {
        $('.navbar-collapse').toggleClass('show');
    });
});
