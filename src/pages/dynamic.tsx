import {NextPage} from 'next'
import dynamic from 'next/dynamic'
import {Suspense} from 'react'
import Counter from '../components/Counter'
import Info from '../components/Info'
import Loading from '../components/Loading'

const SlowFetch = dynamic(() => import('../components/SlowFetch'), {
  suspense: true
})

const DynamicPage: NextPage = () => {
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

export default DynamicPage
