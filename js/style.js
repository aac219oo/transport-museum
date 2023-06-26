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

            // 當錨點被點擊時，手動觸發一次 scroll 事件
            $('a.dropdown-item').on('click', function () {
                // 判断 offcanvas 是否处于显示状态
                if ($('#offcanvasNavbar').hasClass('show')) {
                    // 关闭 offcanvas
                    $('#offcanvasNavbar').offcanvas('hide');
                    // $('.offcanvas-backdrop').toggleClass('show');
                }
                let target = $(this).attr('href');
                let id = target.substring(target.indexOf('#'));
                let offset = $(window).width() > 576 ? 160 : 90;
                $('html, body').animate(
                    {
                        scrollTop: $(id).offset().top - offset,
                    },
                    500,
                    function () {
                        $(window).trigger('scroll');
                    }
                );
            });
            // 监听 offcanvas 隐藏事件
            $('#offcanvasNavbar').on('hidden.bs.offcanvas', function () {
                // 移除 offcanvas-backdrop 元素
                $('.offcanvas-backdrop').remove();
                // 移除 body 上的 offcanvas-open 类
                $('body').removeAttr(
                    'style',
                    'data-bs-overflow',
                    'data-bs-padding-right'
                );
            });

            // 手機子選單效果
            function updateNavitem() {
                var windowWidth = $(window).width();

                $('.nav-link').each(function () {
                    var $this = $(this);
                    var hasDropdown = $this.next('.dropdown-menu').length > 0;

                    if (windowWidth > 1200 && hasDropdown) {
                        $this.removeAttr('data-bs-toggle');
                        $this.removeAttr('aria-expanded');
                    } else if (windowWidth < 1200 && hasDropdown) {
                        $this.attr('data-bs-toggle', 'dropdown');
                        $this.attr('aria-expanded', 'false');
                    }
                });
            }

            $(window).on('resize', updateNavitem);
            $(window).on('load resize', updateNavitem);
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
        if (nowloc >= 300) {
            $('nav.navbar').addClass('bg');
        } else {
            $('nav.navbar').removeClass('bg');
        }
    }

    // // 获取URL中的锚点
    // let hash = window.location.hash;
    // // 获取目标元素
    // let target = $(hash);
    // // 计算滑动的偏移量
    // let offset = $(window).width() < 576 ? 90 : 160; // 在窗口宽度小于576px时偏移量为90，否则为165
    // // 执行滑动
    // $('html, body').scrollTop(target.offset().top - offset);
});

// $(window).on('load', function () {
//     // 获取URL中的锚点
//     let hash = window.location.hash;
//     // 获取目标元素
//     let target = $(hash);
//     // 计算滑动的偏移量
//     let offset = $(window).width() < 576 ? 90 : 160; // 在窗口宽度小于576px时偏移量为90，否则为165
//     // 执行滑动动画
//     $('html, body').animate(
//         {
//             scrollTop: target.offset().top - offset,
//         },
//         300
//     ); // 修改滑动的速度，单位为毫秒
// });
