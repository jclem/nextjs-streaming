import {VFC} from 'react'
import Link from 'next/link'

const Info: VFC = () => (
  <>
    <p>
      This page demos a couple of ways that streaming, suspense, and lazy
      components affect user experience.
    </p>

    <p>
      <Link href="/lazy">
        <a>The /lazy route</a>
      </Link>{' '}
      uses <code>React.lazy</code> to load a the slow-fetch component. Note that
      the browser's loading indicator stops before the component un-suspends.
    </p>

    <p>
      <Link href="/nonlazy">
        <a>The /nonlazy route</a>
      </Link>{' '}
      is a regular component import. Note that there is apparently no selective
      hydration happening (the counter is interactive but not hydrated).
      However, in this case, the browser loading indicator <em>does</em>{' '}
      continue to run until the slow-fetch component un-suspends.
    </p>
  </>
)

export default Info
