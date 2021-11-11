import {useState, VFC} from 'react'

const Counter: VFC = () => {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count => count + 1)}>
      Increment count: {count}
    </button>
  )
}

export default Counter
