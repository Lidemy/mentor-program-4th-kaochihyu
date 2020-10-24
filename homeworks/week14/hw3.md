## 什麼是 DNS？Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？
DNS(Domain name system) 網域名稱系統：
把域名與 IP 互相對應的分散式資料庫，是網址與 IP 之間的橋樑

Google Public DNS 的好處：
- 加速瀏覽器體驗--避免伺服器負載過大、降低網路延遲，以增加上網速度
- 提升網路安全--過濾惡意網站，可以避免被導入到不正確的網站
- 直接取得 DNS 查詢結果

## 什麼是資料庫的 lock？為什麼我們需要 lock？
多筆交易同時進行時，會互相影響，產生競爭危害(race condition)，使用 lock 可以把東西鎖住來防止其他人繼續存取

## NoSQL 跟 SQL 的差別在哪裡？
SQL：
- 是關聯式資料庫，可以用相關欄位把不同 tabel 的資料關聯起來
- 有 schema，要知道要儲存的資料有哪些 

NoSQL：
- 非關聯式資料庫，不支援 JOIN
- 沒有 Schema，用 JSON 格式存資料進 database 
- 存結構不固定的資料

## 資料庫的 ACID 是什麼？
- atmocity 原子性：全部失敗或全部成功(轉錢成功或失敗)
- consistency 一致性：維持資料總數相同(錢的總數一樣)
- isolation 隔離性：多筆交易不互相干擾(不同時進行交易)
- durability 持久性：寫入的資料不會不見