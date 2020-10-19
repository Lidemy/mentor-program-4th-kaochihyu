## Webpack 是做什麼用的？可以不用它嗎？
Webpack 可以把各種資源包在一起，然後讓瀏覽器可以使用這些東西
有些東西在自己的電腦上可以使用，但在瀏覽器上卻沒有支援，例如 Node.js 的require 在瀏覽器上是沒有作用的，因為瀏覽器不認識這個東西，所以必須透過工具的轉換，讓那些東西可以在瀏覽器上使用，webpack 就是可以實現這種工用的工具。
不用webpack，就無法在瀏覽器上使用 CommonJS，即便現在ES6 的標準有 import、export，但他的支援度還不夠，再來，若是要引入別的套件，入口點可能會需要改來改去，整體來講使用 webpack 的便利性還是比較高的。


## gulp 跟 webpack 有什麼不一樣？
gulp：
* gulp 有很多 task (ex.sass、babel、rename)
* gulp 是一個 task manager，在管理那些 task
* task 可以是各種東西(應用範圍很廣)
* 做不到 bundle
Webpack：
* webpack 是一個 bundler
* webpack 可以把資源(ex.scss、js、image...)打包(bundle)在一起
* 資源會先經過 loader 載入， webpack 再包進來
* bundle 了之後就可以讓瀏覽器支援原本無法支援的東西


## CSS Selector 權重的計算方式為何？
由小到大如下：
- 權重為 0, 0, 0, 0：全域 ( * ) 選擇器、組合 (combinators) 選擇器、非偽類 (negation pseudo-class)
- 權重為 0, 0, 0, 1：元素 (Element)、偽元素 (pseudo-element)
- 權重為 0, 0, 1, 0：class 選擇器、偽類 (pseudo-class)、屬性 (attribute) 選擇器
- 權重為 0, 1, 0, 0：id選擇器，
- 權重為 1, 0, 0, 0：行內 (inline style attribute)
- 權重為 1, 0, 0, 0, 0：!important 
0, 0, 0, 0 為最小，1, 0, 0, 0, 0 為最大，依據選擇器的分數計算權重，分數越大優先順序越大，權重越大。

