import {useState, VFC} from 'react'

const Counter: VFC = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      Count: <code>{count}</code>
      <div>
        <button onClick={() => setCount(c => c + 1)}>Increment count</button>
      </div>
    </div>
  )
}

export default Counter
