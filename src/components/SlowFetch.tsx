import {useRouter} from 'next/dist/client/router'
import {resolveHref} from 'next/dist/shared/lib/router/router'
import {VFC} from 'react'
import useSWR from 'swr'

const SlowFetch: VFC = () => {
  useSWR('/', waiter(1000), {suspense: true})
  return <li>Slow fetch complete.</li>
}

const waiter = (timeout: number) => () =>
  new Promise(resolve => setTimeout(() => resolve(true), timeout))

export default SlowFetch
