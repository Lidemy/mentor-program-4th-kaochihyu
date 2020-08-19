## 什麼是 DOM？
DOM(Document Object Model)，可以透過 DOM 讓 JavaScript 與瀏覽器溝通，網頁載入時，瀏覽器幫頁面生成一個 DOM 的模型，讓 JavaScript 透過這個模型來改變或控制網頁的 HTML 文件。 

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
先捕獲再冒泡
1 捕獲(Capturing Phase)：根節點往下傳到目標
2 目標(At Target)：事件產生的目標(不分捕獲冒泡，先添加先執行，後添加後執行)
3 冒泡(Bubbling Phase)：目標往上傳到根結點
true 為捕獲階段，false 為冒泡階段或是失敗


## 什麼是 event delegation，為什麼我們需要它？
event delegation(事件代理)，透過對上層元素添加事件，就能操控其子元素，這樣就不需要將所有元素都加上事件也能對其進行操控，當需要操控的元素量很大的時候，透過事件代理就可以輕鬆操控元素。


## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
event.preventDefault()：取消預設行為，取消瀏覽器的預設行為，事件傳遞不會被中斷，只是瀏覽器的預設行為不會執行，事件就會變成取消預設行為傳遞下去。 
event.stopPropagation()：取消事件傳遞，加在哪邊就中斷在哪邊，該事件的執行不會再繼續往下傳遞。

ex. 假設點選連結，瀏覽器預設會開新分頁，若是用 event.preventDefault()，預設行為會被取消，傳遞下去的事件也會是被取消預設行為，開新分頁就不會執行，若是用 event.stopPropagation()，事件傳遞會被終止，點選的事件不會繼續傳遞下去，開新分頁就不會發生。
