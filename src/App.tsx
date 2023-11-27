import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex font-bold">
        Hello World!
      </div>
      <input type="button" onClick={() => { setCount(count + 1) }} value="fasdfa"/>
      <span>{ count}</span>
    </>
  )
}

export default App
