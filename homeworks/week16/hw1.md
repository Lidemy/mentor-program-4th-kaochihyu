正在執行的程式碼會放在 stack，而 setTimeout 的東西屬於非同步模式，會先放在 WebAPIs，等到 setTimeout 的設定的時間到了會放到 task queue 等待執行，Event Loop 會查看 stack 裡面是不是空的，如果是空的才會把 task queue 裡的東西拿到 stack 裡去執行。
所以在這裡 setTimeout 以外的東西會先等 stack 執行完畢後，才把被放在 task queue 裡 setTimeout 的東西拿到 stack 去執行，輸出的結果如下：
```
1
3
5
2
4
```