## 請列出 React 內建的所有 hook，並大概講解功能是什麼
- `useState`：會回傳有狀態的值，第一次 render 回傳 state 初始值，可以透過 setState，在裡面執行甚麼來改變 state 的值
- `useEffect`：在裡面傳入只想在第一次 render 時執行的 function，後面接一個 dependiecies，如果 dependencies 有改變，就會重新 render
- `useContext`：讓中間層不用傳東西，最底層也能拿到，用 createContext 建立 context，provider 把下層的東西包住，並把要傳遞的值帶到 provider 的 value
- `useReducer`：state 的值如果比較複雜可以用 useReducer，把初始值傳入，設定不同情況的 action，再用 disaptch 決定要用哪個方式去設定 state
- `useCallback`：傳入 callback function，後面接一個 dependencies，如果 dependencies 改變，callback 才會改變
- `useMemo`：在 useMemo 帶入 value 的 function 跟一個陣列作為 dependencies，當其中一個 dependencies 改變的時候，才會重新執行 function 產生新的 value
- `useRef`： 用來放一些跟畫面無關的參數，可以把 mutable value 放到他的 .current 屬性，會返回 mutable object，object.current 就是 useRef 的參數
- `useImperativeHandle`：useRef 搭配 useImperativeHandle 使用，可以告訴父 component 自定義的 instance 值
- `useLayoutEffect`：跟 useEffect 類似，但是在 function render 完，DOM 更新完，畫面 render 之前再更新一次 state
- `useDebugValue`：可以在 React DevTools 顯示自定義 Hook 的標籤

## 請列出 class component 的所有 lifecycle 的 method，並大概解釋觸發的時機點
Mounting(把元素放到 DOM 上時)：
- `contructor()`：在最一開始就會呼叫，用來設置初始值
- `getDerivedStateFromProps()`：在 DOM 的元素 render 之前被呼叫，會根據初始的 props 來改變 state 的值 
- `render()`：用來把 HTML 放到 DOM 上面
- `componentDidMount()`：在 component render 後被呼叫，可以改變已經存在於 DOM 的 component 的 state

Updating(component 的 state 或 props 改變時)：
- `getDerivedStateFromProps()`：update 時，第一個被呼叫的 method，根據 component 被初始化的 props 來改變 state
- `shouldComponentUpdate`：回傳 boolean 值，來決定 React 是否要繼續 render
- `render()`：當 component 已經 upadate，要重新把 HTML 放到 DOM 上
- `getSnapshotBeforeUpdate()`：把 update 之前的 props、 state 傳進去，在 update 後可以檢查 update 之前的值
- `componentDidUpdate`：當 DOM 的 component update 之後被呼叫
Unmounting(當 component 從 DOM 移除時)：
- `componentWillUnmount`：唯一的 unmounting 的 method 在 component 從 DOM 被移除時執行

## 請問 class component 與 function component 的差別是什麼？
* class component 要把 setState 傳下去時，外面需要再包一個函式，才能傳下去；function component 搭配 hook 使用，就可以直接傳下去
* class component 只要調用 setState 的 function 就會重新渲染，不論 state 的值有沒有改變；function component 只有在 state 的值改變時，才會重新渲染

## uncontrolled 跟 controlled component 差在哪邊？要用的時候通常都是如何使用？
* uncontrolled component 是指不受 react 控制的資料，例如<input /> 保有自己的資料狀態，輸入的內容可以直接存在 <input /> 內，也可以從 <input /> 直接取出資料；controlled component 是指受 react 控制的資料，當需要對資料有更多控制時，通常會使用 controlled component