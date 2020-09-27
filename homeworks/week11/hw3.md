## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫
- 雜湊：把資料經過演算後，將原本的資料轉換成別的字串，因為不同組資料可能轉換成相同的字串，所以無法從轉換後的字串去推斷原本的資料，
- 加密：把資料經過加密後，會有個 key，只要有 key 的話就能解開，一組加密的資料不會對應多個原始資料，所以很容易就可以被解密
兩這的差別在於加密屬於一對一的關係，所以可以解密，而雜湊屬於多對一的關係，不能解密。
密碼經過雜湊後才存入資料庫，這樣在資料庫上顯示的密碼就會是經過雜湊後的亂碼，而不會直接顯示密碼，可以確保就算能進入資料庫看到資料也不知道原本的密碼是甚麼。


## `include`、`require`、`include_once`、`require_once` 的差別
include、跟 require 都是可以包含並執行指定檔案，這兩個的差別在於，用 include 的時候如果沒有找到檔案，會顯示 E_WARNING，但還是會繼續執行其他程式，而 require 會顯示 E_ERROR 且會停止繼續執行其他程式。
include_once 跟 include 的功能一樣，但 include_once 會確認內的程式碼是否已經包含，如果有的會就不會再重複包含一次，避免函式重新定義或變數重新宣告的狀況發生。require_once 同理。


## 請說明 SQL Injection 的攻擊原理以及防範方法
- 攻擊原理：用 sql query 格式的字串去拼接，讓原本 sql query的結果變成別的結果，用不正當的方式間接獲取資料庫的東西。
- 防範方法： 用 Prepared statement 來避免
把要可以被更動的值改成問號，放入 prepare( )，用 bind_param 把問號的值帶入，再用 execute( ) 執行
```
$sql = "UPDATE kaochihyu_users SET role=? WHERE id=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('si', $role, $id);
$result = $stmt->execute();
```


##  請說明 XSS 的攻擊原理以及防範方法
- 攻擊原理：可以在別人的網站執行程式碼，如果輸入的東西成填寫程式碼的形式，就會被解釋為程式碼讓程式碼執行，而不是純文字，這樣可能會被倒入釣魚網站或是獲取一些重要資料(ex. Cookie)
- 防範方法：用php 內建函式 htmlspecialchars(string, ENT_QUOTES)，傳進去的字串就都會被解釋成文字


## 請說明 CSRF 的攻擊原理以及防範方法
- 攻擊原理：跨站請求偽造，只要發送 request 給某個網域就會把關聯的 cookie 一起帶上去，可能透過一個假的網站在自己未登出的情況下，就把自己的 cookie 帶到假的網站，這樣就可以假裝是本人進行一些自己不知道的操作。
- 防範方法：
- 檢查 Referer：寫一個程式碼來檢查 request 的 header 裡 referer 帶的 domain 是否合法 (問題：程式碼可能有 bug 或 瀏覽器不會帶 referer
- 圖形驗證碼、簡訊驗證碼：透過驗證碼加以確認是同一個 domain (問題：太麻煩)
- CSRF token：在 form 裡加上 csrftoken，由 server 產生一組隨機的 token 帶上，並存在 server 的 session 裡 (問題：如果server 支持 cross origin 的 request，那攻擊方就有可能拿到 csrf token)
- Double Submit Cookie：由 server 產生一組隨機的 token，並存在 client 的 Cookie，比對 client 端 cookie 的 token 跟 form 的 token (問題：攻擊者可能會可以寫 cookie)
- Client 的Double Submit Cookie：跟 Double Submit Cookie 的原理一樣，但差別在於 csrftoken 由 client 端產生，而非 server
- 加上 SameSite：在 Set-Cookie 的後面加上 SameSite，讓瀏覽器驗證是不是在同一個地方發的 request
