﻿## 跟你朋友介紹 Git

透過 Git 來進行版本控制，可以用資料夾來比喻，假設現在檔案內容有異動，就新增一個資料夾將改動過的檔案放進新的資料夾，如果改動的檔案不想要版本控制，就不放入資料夾，而新增的資料夾會使用亂碼來命名來避免版本號衝突。另外可透過建立分支，讓開發可以不會互相干擾，來降低線性開發時造成的不穩定性。

先教你一些常用的基本指令：
要做版版控制，先初始化，告訴 Git 要做版本控制： git init
將檔案加入版本控制： git add + 檔案名稱
更改後新建版本：git commit -m + 名稱

假設你有一個檔案名稱叫做「笑話」想要進行版本控制，首先輸入 git init 進行初始化，接著輸入 git add 笑話，加入版本控制，你在改動這個檔案後，輸入 git commit -m "笑話1.1"，此時你就有一個笑話"1.1"的版本檔案了~

如果你想改進你的笑話，但是不確定改進的版本是不是夠好笑，不想直接在原本的版本修改的話，可以使用 branch，等你確定好新版的笑話更好笑的時候再跟原版的合併也不遲啊~

教你一些關於 branch 的指令：
建立 bramch：git branch + 名稱
刪除 branch：git branch -d
查看 branch：git branch -v
合併 branch：merge

另外如果有其他人對於你的笑話也很感興趣，想要跟你一起變成笑話王的話，可以透過 push 跟 pull 的指令將自己電腦裡版本控制的檔案上傳到遠端或是把遠端的檔案拉到自己的電腦，大家可以一起互相分享，這樣的功能在共同開發的時候特別方便呢！

指令這樣寫：
將本地檔案推到遠端：git push origin master
將遠端檔案拉到本地：git pull origin master

大概是這樣，祝你成為電視笑話冠軍啦！


