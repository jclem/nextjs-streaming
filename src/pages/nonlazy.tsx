import {NextPage} from 'next'
import {Suspense} from 'react'
import Counter from '../components/Counter'
import Info from '../components/Info'
import Loading from '../components/Loading'
import SlowFetch from '../components/SlowFetch'

const NonLazyPage: NextPage = () => {
  return (
    <main>
      <Counter />

      <Suspense fallback={<Loading />}>
        <SlowFetch />
      </Suspense>

      <Info />
    </main>
  )
}

export default NonLazyPage
