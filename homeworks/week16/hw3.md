����B�J�G
1. �i�J global EC�A�إ� global VO
```
globalEC�G {
    global VO: {
    
    }
}
```

2. global VO ��l�Ƴ]�w�A��ѼơBfunction�B�ܼ�
```
globalEC�G {
    global VO: {
       a�Gundefined
       fn�Gfunction 
    }
}
```

3. global VO ��l�Ƴ]�w����q global ���Ĥ@��}�l����
4. var a = 1�A�N global VO �� a �]�� 1
```
globalEC�G {
    global VO: {
       a�G1
       fn�Gfunction 
    }
}
```

5. �~�򩹤U����A�I�� fn()�A�I�s fn �o�� function�A�i�J fn EC�A�إ� fn AO
```
fnEC�G {
    fn AO: {
    
    }
}
```

6. fn AO ��l�Ƴ]�w�A��ѼơBfunction�B�ܼ�
```
fnEC�G {
    fn AO: {
        a: undefined
        fn2: function
    }
}
```

7. fn AO ��l�Ƴ]�w����q fn ���Ĥ@��}�l����
8. console.log(a)�A��� fn AO �� a �� undefined�A��X undefined
9. var a = 5�A�N fn AO �� a �]�� 5
```
fnEC�G {
    fn AO: {
        a: 5
        fn2: function
    }
}
```

10. console.log(a)�A��� fn AO �� a �� 5�A��X 5
11. a++�A �N fn AO �� a �[ 1�Afn AO �� a �ܦ� 6
```
fnEC�G {
    fn AO: {
        a: 6
        fn2: function
    }
}
```

12. �I�� fn2()�A�I�s fn2 �o�� function�A�i�J fn2 EC�A�إ� fn2 AO
```
fn2EC�G {
    fn2 AO: {
    
    }
}
```

13. fn2 AO ��l�Ƴ]�w�A��ѼơBfunction�B�ܼơA�ƻ򳣨S���A�N�ŵ�
```
fn2EC�G {
    fn2 AO: {
    
    }
}
```

14. fn2 AO ��l�Ƴ]�w����q fn2 ���Ĥ@��}�l����
15. console.log(a)�A�b fn2 AO �䤣�� a�A���W�@�h��A���fn AO �� a �� 6�A��X 6
16. a = 20�Ab = 100�A�b fn2 AO �䤣�� a�Bb ���W�@�h��A�b fn AO ��� a�A�� a �אּ 20�A�䤣�� b�A�~�򩹤W�@�h��A���S���A�b global VO �] b �� 100
```
fnEC�G {
    fn AO: {
        a: 20
        fn2: function
    }
}

globalEC�G {
    global VO: {
       a�G1
       b: 100
       fn�Gfunction 
    }
}
```

17. fn2 ���槹���A���^ fn EC �~�����
18. console.log(a)�A���fn AO �� a �� 20�A��X 20
19. fn ���槹���A���^ global EC �~�����
20. console.log(a)�A��� global VO �� a �� 1 �A��X 1
21. a = 10�A�N global VO �� a �]�� 10
```
globalEC�G {
    global VO: {
       a�G10
       fn�Gfunction 
    }
}

```

22. console.log(a)�A��� global EO �� a �� 10�A��X 10
23. console.log(b)�A��� global VO �� b �� 100�A��X 100
24. global ���槹��

��X���G�G
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