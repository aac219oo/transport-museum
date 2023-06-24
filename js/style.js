$(document).ready(function () {
    // 一进到网页加载header.html
    $.ajax({
        url: './header.html',
        dataType: 'html',
        success: function (response) {
            $('.header').html(response);
            updateNavbar(); // 在此处调用updateNavbar()

            // 获取原始图片路径和悬停时的图片路径
            var originalImage = './images/index/top.png';
            var hoverImage = './images/index/top_2.png'; // 替换为悬停时的图片路径

            // 鼠标悬停时切换图片
            $('.gotop').hover(
                function () {
                    // 鼠标进入时更换图片
                    $(this).find('img').attr('src', hoverImage);
                },
                function () {
                    // 鼠标离开时恢复原始图片
                    $(this).find('img').attr('src', originalImage);
                }
            );

            // 到顶部设置
            $('.gotop').on('click', function () {
                $('html,body').animate(
                    {
                        scrollTop: 0,
                    },
                    200
                );
            });
        },
        error: function (xhr, status, error) {
            console.log('Error loading header:', error);
        },
    });

    // header scroll效果
    $(window).on('scroll', function () {
        updateNavbar();
    });

    function updateNavbar() {
        var nowloc = $(window).scrollTop();
        if (nowloc >= 200) {
            $('nav.navbar').addClass('bg');
        } else {
            $('nav.navbar').removeClass('bg');
        }
    }

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
});
