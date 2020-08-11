## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
* <em> 用來強調文字，顯示變成斜體。
* <svg>: 用來當作 SVG 的容器，設定 svg 的長寬，並可以在設定的範圍裏面裡面畫路徑、方形、圓形、文字...(Scalable Vector Graphics 可縮放矢量圖形)。
ex.
``` 
//圓形 
<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="4" fill="white"/>
</svg>

//長方形
<svg width="400" height="100">
    <rect width="400" height="100">
</svg>

```

* <video>: 可以置入影片，可設長寬，controls 會有控制鍵(播放、停止、音量)
ex.
```
<video width="320" height="240" controls>
   <source src="movie.mp4" type="video/mp4">
</video>

```

## 請問什麼是盒模型（box modal)
元素的一個模型，想像成一個盒子，由內到外是 content(元素本身)、 padding(內距)、border(邊界)、margin(外距)


## 請問 display: inline, block 跟 inline-block 的差別是什麼？
* inline: 元素排在同一行，不會被換行，但是不能整寬高，尺寸大小就是元素本來大小
* inline-block: 元素排在同一行，不會被換行，可以調整寬高，尺寸大小可以設定
* block: 一個元素自己一行，下個元素會自動換行，部會排在同一行，初始設定是 block



## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
* static: 初始設定的位置。
* relative: 相對於初始設定的位置。
* absolute: 可以對第一個位置不是初始設定的元素去設定位置。
* fiexd: 相對於視窗的位置。