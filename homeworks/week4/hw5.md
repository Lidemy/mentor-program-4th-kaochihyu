## 請以自己的話解釋 API 是什麼
API 英文是 Application Programming Interface，中文是應用程式介面，做為尋求資訊者跟提供資訓者中間的一個媒介，這個媒介能夠以一個雙方都懂得的方式進行溝通，使雙方可以交換資料。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
300：多個選擇，發出去的 request 有多可能的 response，需要從中選擇。
409：請求與目前狀態衝突。
511：用戶端需要進行驗證去取得網路訪問權限。


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL：https//chihyu-restaruants.com
| 說明             | Method             | path             | 參數                    | 範例               | 
----------------------------------------------------------------------------------------------------------
| 獲取所有餐廳資料 | GET                | /restaurants     | _limit:限制回傳資料數量 | /restaurants?_limit=5  
| 獲取單一餐廳資料 | GET                | /restaurants:/id | 無                      | /restaurants/10
| 刪除餐廳資料     | DELETE             | /restaurants:/id | 無                      | 無
| 新增餐廳資料     | POST               | /restaurants     | name：餐廳名            | 無
| 更改餐廳資料     | PATCH              | /restaurants:/id | name：餐廳名            | 無
    

