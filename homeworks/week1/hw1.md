## 交作業流程gigi

交作業前流程
1. 跳轉到 mentor-program-4th-kaochihyu 的位置：cd mentor-program-4th-kaochihyu
2. 開一個新的 branch：git branch week1.
3. 切換到新開的 branch：git checkout week1(或 git checkout -b week1)
4. 直接在 hw 檔案寫作業(在新的 branch 下寫作業)
5. 完成後commit：git commit -am "week1 完成"


交作業流程
1. 把在本地的東西推到遠端去：git push origin week1 
2. 打開 GitHub 介面，點選 pull requests，再點按 Compare and pull requests 或(New pull requests)
3. 將敘述寫一寫，點按 Create pull requests (完成交作業第一步)
4. 到學習系統，點選作業列表，再點按新增作業
5. 選擇週數，將作業 PR(Pull requests) 連結填入
6. 將確認項目完成並勾選
7. 點按送出

助教部分
1. 批改完作業
2. 點按 Merge，將遠端的 branch 合併到遠端的 master
3. 刪除遠端 branch

看到 Merged後 (表示作業已被批改完成)
1. 在本地切回 master：git checkout master
2. 將遠端的 master 跟本地的 master 同步： git pull origin master
3. 刪除本地的 branch： git branch -d week1
 
