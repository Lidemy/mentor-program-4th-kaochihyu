1. 把 obj.inner.hello() 想成 obj.inner.hello.call(obj.inner)，call 裡面的東西就可以取代 this，所以這題答案輸出 2
2. 把 obj2.hello() 想成 obj2.hello.call(obj2)，同上題，.call() 裡面的東西可以取代 this，而 obj2 是 obj.inner，所以這題答案輸出 2
3. 把 hello() 想成 hello.call()，call 裡面沒有東西，所以最後輸出 undefined

輸出結果：
```
2
2
undefined
```