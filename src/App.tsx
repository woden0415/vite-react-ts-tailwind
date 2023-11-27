import { useState } from 'react'
import { useStoreState } from "./store/index.hook"

function App() {
  const [count, setCount] = useState(0)
  const email = useStoreState(state => state.user.info.email)
  return (
    <>
      <div className="flex font-bold">
        Hello World!
      </div>
      <div className="flex font-bold">
        邮箱是：{email}
      </div>
      <input type="button" onClick={() => { setCount(count + 1) }} value="fasdfa"/>
      <span>{ count}</span>
    </>
  )
}

export default App
