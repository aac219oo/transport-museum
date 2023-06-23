$(document).ready(function () {
    $('.nav li').click(function () {
        indexNo = $(this).index();
        wdth = $(window).width();
        if (wdth < 500) {
            targetTop =
                $('.content-area-label-txt').eq(indexNo).offset().top - 90;
        } else {
            targetTop =
                $('.content-area-label-txt').eq(indexNo).offset().top - 165;
        }
        $('html,body').animate(
            {
                scrollTop: targetTop,
            },
            500
        );
    });

    // 取得當前網頁的檔名（不包含副檔名）
    var currentPage = window.location.pathname
        .split('/')
        .pop()
        .split('.')
        .shift();
    // 按鍵數量
    var buttonCount = $('.nav .nav-item').length;

    $('.nav .nav-item').each(function (index) {
        // 根據當前網頁的檔名動態設置圖片路徑
        var originalImage = `./images/pages/${currentPage}/按鈕${
            index + 1
        }.png`;
        var hoverImage = `./images/pages/${currentPage}/按鈕${index + 1}-2.png`;
        var $img = $(this).find('.nav-img');

        $img.hover(
            function () {
                $(this).attr('src', hoverImage);
            },
            function () {
                $(this).attr('src', originalImage);
            }
        );
    });
});
