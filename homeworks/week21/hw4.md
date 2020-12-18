## 為什麼我們需要 React？可以不用嗎？
- Vitrual DOM：有任何改變時，React 會先透過比對 Virtual DOM 的差異，再對真的 DOM 進行更新，且只 re-render 真的有變動的部分，不用全部 re-render，就能以更有效率的方式去 render
- Reusable components：使用 React，可以自定義 component，就可以用這些 component 來做事，可以重複使用定義好的 component，code 也會比較容易管理跟擴充

## React 的思考模式跟以前的思考模式有什麼不一樣？
資料跟畫面分開看，資料是資料，畫面是畫面，要改變畫面時，其實要改的是 state，state 改變後就會對應到新的 UI

## state 跟 props 的差別在哪裡？
- props，是別人傳進來給你的，component 之間透過 props 把東西傳下去
- state，是元件本身的狀態，只有 component 自己可以改變 state
