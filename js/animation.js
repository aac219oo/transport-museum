// 使用 GSAP 庫設定動畫
gsap.to('.animation-app', {
    duration: 1.5, // 動畫持續時間（以秒為單位）
    x: 0, // X 軸移動的距離
    y: '25%', // Y 軸移動的距離
    // rotation: 360, // 旋轉角度（度數）
    // opacity: 0.5, // 不透明度
    // scale: 1.5, // 縮放比例
    ease: 'power1.inOut', // 動畫緩動函數（可根據需要選擇不同的函數）
    repeat: -1, // 重複次數（-1 表示無限重複）
    yoyo: true, // 是否反向播放動畫
});

gsap.to('.animation-cloud', {
    duration: 2.5, // 動畫持續時間（以秒為單位）
    x: 0, // X 軸移動的距離
    y: '60%', // Y 軸移動的距離
    // rotation: 360, // 旋轉角度（度數）
    // opacity: 0.5, // 不透明度
    // scale: 1.5, // 縮放比例
    ease: 'back.in', // 動畫緩動函數（可根據需要選擇不同的函數）
    repeat: -1, // 重複次數（-1 表示無限重複）
    yoyo: true, // 是否反向播放動畫
});

gsap.to('.animation-orange-boat', {
    // 第二個 img 元素的動畫設定
    duration: 6,
    x: '-65%', // X 軸移動的距離
    y: '45%', // Y 軸移動的距離
    repeat: -1,
    ease: 'power1.inOut', // 動畫緩動函數（可根據需要選擇不同的函數）
    yoyo: true, // 是否反向播放動畫
});

gsap.to('.animation-green-boat', {
    // 第二個 img 元素的動畫設定
    duration: 4,
    x: '40%', // X 軸移動的距離
    y: '30%', // Y 軸移動的距離
    repeat: -1,
    ease: 'power1.inOut', // 動畫緩動函數（可根據需要選擇不同的函數）
    yoyo: true, // 是否反向播放動畫
});

gsap.to('.animation-drone', {
    duration: 2.5, // 動畫持續時間（以秒為單位）
    x: 0, // X 軸移動的距離
    y: '150%', // Y 軸移動的距離
    // rotation: 360, // 旋轉角度（度數）
    // opacity: 0.5, // 不透明度
    // scale: 1.5, // 縮放比例
    ease: 'power4.inOut', // 動畫緩動函數（可根據需要選擇不同的函數）
    repeat: -1, // 重複次數（-1 表示無限重複）
    yoyo: true, // 是否反向播放動畫
});

// 创建 TweenMax 动画来控制伪元素的样式属性
var tl = new TimelineLite();

tl.to('.animation-area span', {
    opacity: 0.2,
    duration: 0.5,
    ease: 'power1.in',
}).to('.animation-area span', {
    opacity: 0,
    duration: 0.5,
    ease: 'power1.out',
    delay: 1.5,
});
