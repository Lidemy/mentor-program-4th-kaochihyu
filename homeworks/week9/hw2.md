## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
- varchar: 可變長度 0 ~ 65355 的字串，可以限制長度，像 username 這種比較短的適用
- text: 最大長度 65535 個字元，通常不會限制長度，比較適用像文章這類字數不確定的資料。


## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？
- Cookie 可以存 Server 要求的資料，而 Cookie 裡存的這些資料可以讓 Server 作為之後辨識身分的依據
- 瀏覽器發送 Request 給 Server， Server 接收後利用 Set-Cookie 讓瀏覽器設置 Cookie，並把資料存在 Cookie
- 瀏覽器再發 Request 給 Server 的時候，把之前設好的 Cookie 一併帶上去給 Server 



## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
暱稱、帳號、密碼沒有告知會員要填寫的長度跟方式(中文或英文大小寫)，可能會因為填寫規格而出問題。


