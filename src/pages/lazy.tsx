import {NextPage} from 'next'
import {lazy, Suspense} from 'react'
import Counter from '../components/Counter'
import Info from '../components/Info'

const SlowFetch = lazy(() => import('../components/SlowFetch'))

const LazyPage: NextPage = () => {
  return (
    <main>
      <Counter />

      <Suspense fallback={<p>Loading...</p>}>
        <SlowFetch />
      </Suspense>

      <Info />
    </main>
  )
}

export default LazyPage
