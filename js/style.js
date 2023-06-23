$(document).ready(function () {
    // JavaScript (如果需要關閉下拉選單時消失，請添加以下程式碼)
    $(window).resize(function () {
        var windowWidth = $(window).width();
        if (windowWidth > 1200) {
            $('.dropdown').on('hide.bs.dropdown', function () {
                return false;
            });
        }
    });

    $(window).on('scroll', function () {
        updateNavbar();
    });

    // 當錨點被點擊時，手動觸發一次 scroll 事件
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate(
            {
                scrollTop: $(target).offset().top,
            },
            500,
            function () {
                $(window).trigger('scroll');
            }
        );
    });

    function updateNavbar() {
        var nowloc = $(window).scrollTop();
        if (nowloc >= 200) {
            $('nav.navbar').addClass('bg');
        } else {
            $('nav.navbar').removeClass('bg');
        }
    }

    // 获取按钮元素
    var $gotop = $('.gotop');

    // // 到上層設定
    $gotop.on('click', function () {
        $('html,body').animate(
            {
                scrollTop: 0,
            },
            500
        );
    });

    // 获取原始图片路径和悬停时的图片路径
    var originalImage = $gotop.find('img').attr('src');
    var hoverImage = './images/index/top_2.png'; // 替换为悬停时的图片路径

    // 鼠标悬停时切换图片
    $gotop.hover(
        function () {
            // 鼠标进入时更换图片
            console.log('in');
            $(this).find('img').attr('src', hoverImage);
        },
        function () {
            // 鼠标离开时恢复原始图片
            console.log('out');
            $(this).find('img').attr('src', originalImage);
        }
    );
});
