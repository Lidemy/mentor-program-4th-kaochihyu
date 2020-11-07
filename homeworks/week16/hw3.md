執行步驟：
1. 進入 global EC，建立 global VO
```
globalEC： {
    global VO: {
    
    }
}
```

2. global VO 初始化設定，找參數、function、變數
```
globalEC： {
    global VO: {
       a：undefined
       fn：function 
    }
}
```

3. global VO 初始化設定完後從 global 的第一行開始執行
4. var a = 1，將 global VO 的 a 設成 1
```
globalEC： {
    global VO: {
       a：1
       fn：function 
    }
}
```

5. 繼續往下執行，碰到 fn()，呼叫 fn 這個 function，進入 fn EC，建立 fn AO
```
fnEC： {
    fn AO: {
    
    }
}
```

6. fn AO 初始化設定，找參數、function、變數
```
fnEC： {
    fn AO: {
        a: undefined
        fn2: function
    }
}
```

7. fn AO 初始化設定完後從 fn 的第一行開始執行
8. console.log(a)，對照 fn AO 的 a 為 undefined，輸出 undefined
9. var a = 5，將 fn AO 的 a 設成 5
```
fnEC： {
    fn AO: {
        a: 5
        fn2: function
    }
}
```

10. console.log(a)，對照 fn AO 的 a 為 5，輸出 5
11. a++， 將 fn AO 的 a 加 1，fn AO 的 a 變成 6
```
fnEC： {
    fn AO: {
        a: 6
        fn2: function
    }
}
```

12. 碰到 fn2()，呼叫 fn2 這個 function，進入 fn2 EC，建立 fn2 AO
```
fn2EC： {
    fn2 AO: {
    
    }
}
```

13. fn2 AO 初始化設定，找參數、function、變數，甚麼都沒有，就空著
```
fn2EC： {
    fn2 AO: {
    
    }
}
```

14. fn2 AO 初始化設定完後從 fn2 的第一行開始執行
15. console.log(a)，在 fn2 AO 找不到 a，往上一層找，對照fn AO 的 a 為 6，輸出 6
16. a = 20，b = 100，在 fn2 AO 找不到 a、b 往上一層找，在 fn AO 找到 a，把 a 改為 20，找不到 b，繼續往上一層找，都沒找到，在 global VO 設 b 為 100
```
fnEC： {
    fn AO: {
        a: 20
        fn2: function
    }
}

globalEC： {
    global VO: {
       a：1
       b: 100
       fn：function 
    }
}
```

17. fn2 執行完畢，跳回 fn EC 繼續執行
18. console.log(a)，對照fn AO 的 a 為 20，輸出 20
19. fn 執行完畢，跳回 global EC 繼續執行
20. console.log(a)，對照 global VO 的 a 為 1 ，輸出 1
21. a = 10，將 global VO 的 a 設成 10
```
globalEC： {
    global VO: {
       a：10
       fn：function 
    }
}

```

22. console.log(a)，對照 global EO 的 a 為 10，輸出 10
23. console.log(b)，對照 global VO 的 b 為 100，輸出 100
24. global 執行完畢

輸出結果：
```
undefined
5
6
20
1
10
100
```

```
var a = 1
function fn(){
  console.log(a) // undefined
  var a = 5
  console.log(a) // 5
  a++
  var a
  fn2()
  console.log(a) // 20
  function fn2(){
    console.log(a) // 6
    a = 20
    b = 100
  }
}
fn()
console.log(a) // 1
a = 10
console.log(a) // 10
console.log(b) // 100
```