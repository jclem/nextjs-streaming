import {NextPage} from 'next'
import {lazy, Suspense} from 'react'
import Counter from '../components/Counter'
import Info from '../components/Info'
import Loading from '../components/Loading'

const SlowFetch = lazy(() => import('../components/SlowFetch'))

const LazyPage: NextPage = () => {
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

export default LazyPage
