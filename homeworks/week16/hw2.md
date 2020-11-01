setTimeout 屬於非同步模式，所以會先被放在 task queue 等待執行，當 stack 裡的東西都執行完畢後，Event Loop 發現 stack 是空的就把 task queue 裡 setTimeout 的東西拿去 stack 執行，所以一開始進入迴圈，從 i = 0 開始，console.log('i', 0)，輸出 0，接著碰到 setTimeout 的東西，把他拿去 WebAPIs(等時間到了再放到 task queue)，接著 i = 1，重複上面動作，直到 i = 5 時，迴圈結束，此時，stack 空了，task queue 有五個等待執行的東西，Event Loop 把在 task queue 裡等待執行的東西放到 stack 去執行，此時 i = 5，所以會輸出 5 個 5，輸出結果如下：

先輸出 0 到 4，接著 每個 5 之間大約相隔一秒後輸出
```
i: 0
i: 1
i: 2
i: 3
i: 4
5
5
5
5
5
```