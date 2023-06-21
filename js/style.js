$(document).ready(function () {
    // JavaScript (如果需要關閉下拉選單時消失，請添加以下程式碼)
    $('.dropdown').on('hide.bs.dropdown', function () {
        return false;
    });
});
