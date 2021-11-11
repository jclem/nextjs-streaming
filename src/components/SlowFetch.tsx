import {VFC} from 'react'
import useSWR from 'swr'

const SlowFetch: VFC = () => {
  useSWR('/', waiter(1000), {suspense: true})

  return (
    <p>
      <strong>Slow fetch complete.</strong>
    </p>
  )
}

const waiter = (timeout: number) => () =>
  new Promise(resolve => setTimeout(() => resolve(true), timeout))

export default SlowFetch
