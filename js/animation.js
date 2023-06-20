// 使用 GSAP 庫設定動畫
gsap.to('.animation-element', {
    duration: 0.8, // 動畫持續時間（以秒為單位）
    x: 0, // X 軸移動的距離
    y: 30, // Y 軸移動的距離
    // rotation: 360, // 旋轉角度（度數）
    // opacity: 0.5, // 不透明度
    // scale: 1.5, // 縮放比例
    ease: 'power1.out', // 動畫緩動函數（可根據需要選擇不同的函數）
    repeat: -1, // 重複次數（-1 表示無限重複）
    yoyo: true, // 是否反向播放動畫
});
