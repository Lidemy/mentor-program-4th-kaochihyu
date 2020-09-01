## 什麼是 Ajax？
Ajax 是 Asynchronous JavaScript and XML 的縮寫，非同步跟伺服器交換資料的 JavaScript，當在瀏覽器發送 request，等待 response 傳回來時，有非同步就可以在資料還沒傳回來的過程中繼續把下面不用抓資料的程式跑完，避免等待抓資料的時間介面跑到一半或是空白，讓使用者的體驗可以更好。

## 用 Ajax 與我們用表單送出資料的差別在哪？
用 Ajax 送出資料不會換頁，用表單送出資料是帶資料到一個新的頁面，所以每一次都會換頁。

## JSONP 是什麼？
不受同源政策限制的跨來源請求，JSON with Padding，<script> 標籤不受同源政策限制，利用 <script> 來達成跨來源請求，在 <script> 放入回傳資料的網址，將 server 端提供一個 callback 的參數當作函式名稱，就可以在函式中拿到回傳的資料。

## 要如何存取跨網域的 API？
Server 端(是後端不是前端)要在 Header 加上 Access-Control-Allow-Origin：* ，即所有來源都接受，這樣瀏覽器在收到 response 後，就會允許我們存取。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
第四週我們是在自己的電腦發出 request，而這週是透過瀏覽器幫我們發 request，因為多了一道瀏覽器，瀏覽器會幫忙判斷 response，出於安全性的考量，所以才會有跨網域的問題。

