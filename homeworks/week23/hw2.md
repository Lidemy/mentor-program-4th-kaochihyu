## 為什麼我們需要 Redux？
傳統 MVC，多個 Model 可能會跟多個 View 連結在一起，當資料被改變時，會不知道是誰改變的，所以使用 Redux 來管理 global 的資料，追蹤資料是由誰改變的，就可以知到後續處理的邏輯

## Redux 是什麼？可以簡介一下 Redux 的各個元件跟資料流嗎？
Redux 是一個 library，可以透過 actions 來管理和更新 state
* state：app 的資料，UI 的渲染會根據 state 
* actions：想像成 event，用來描述在 app 裡面發生的事情，
* reducers：用來接收 current state 跟 action ，並回傳更新的 state (currentState, action) => newState
* store：是一個 object，把 state、actions、reducer 整合在一起

資料流：
1. app 有甚麼變動的時候(ex. 使用者點擊按鈕)
2. app code 發送 action 到 Redux Store
3. store 執行 reducer fucntion (之前的 state + 現在 action)，產生的 value 會成為新的 state
4. store 會通知所有跟這個 store 有關的 UI，讓他們知道 store 有更新
5. 每個 UI 元件會檢查他們的所需的 state 的 data 是否改變
6. 如果元件發現他們的 data 有變，就會 re-render 成新的 data

## 該怎麼把 React 跟 Redux 串起來？
安裝 react-redux
使用 react-redux library 內建函式來連結 React、Redux：
* `useSelector`：讓 component 從 store 讀取 state
* `useDispatch`：在 component 裡面呼叫 useDispatch 來發送 action
* `<Provider store={store}>`：用 Provider 包住整個 App，並傳入 store 為 prop，讓所有 component 都可以存取 store
