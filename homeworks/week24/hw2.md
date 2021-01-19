## Redux middleware 是什麼？
像是 action 的轉換，讓 action 在進到 store 之前先經過 middleware(去 call api)轉換，轉換後成新的 action

## CSR 跟 SSR 差在哪邊？為什麼我們需要 SSR？
**CSR：**
* 瀏覽器請求 HTML -> 瀏覽器請求 JS -> React 元件初始化，請求 API -> 使用者看見網頁內容
* 透過 API 請求資料，爬蟲看不到資料，不利於 SEO

**SSR：**
* 瀏覽器請求 HTML -> 使用者看見網頁內容
* 網頁內容都在後端處理，爬蟲看到的是完整網站，有利於 SEO
* 渲染伺服器(express)把內容事先放到 HTML 

## React 提供了哪些原生的方法讓你實作 SSR？
當發一個 request 到 server，server 就可以用 react 的一個方法，`ReactDOMServer.renderToString()`，把 component render 成 html string，server 把這個結果回傳回去，browser 看到的就會是 html 的內容，此時 eventListener 還沒放上去被處理，所以需要再用 `ReactDOM.hydrate()`，幫你把功能加上去變成真正可以動的網站

## 承上，除了原生的方法，有哪些現成的框架或是工具提供了 SSR 的解決方案？至少寫出兩種
**Next.js**
* page 會根據 pages 資料夾裡面的檔案名稱自動產生 route
* 有兩種 pre-rendering 的方法：Static Generation、Server-side Rendering，當要額外的資料時，使用內建的 function 把要 fetch 的資料傳進去，在產生 HTML 時去呼叫這個內建 function，再把 return 的值用 props 傳入

**prerender.io**
* 幫你起一個 server，開一個瀏覽器，把你網站訪問完拿到的資料結果儲存起來，當有搜尋引擎來的時候就把儲存的資料給他


