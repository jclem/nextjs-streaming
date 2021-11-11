import Link from 'next/link'
import {VFC} from 'react'

const Info: VFC = () => (
  <>
    <p>
      This page demos a couple of ways that streaming, suspense, and lazy
      components affect user experience.
    </p>

    <p>
      Source:{' '}
      <a href="https://github.com/jclem/nextjs-streaming">
        jclem/nextjs-streaming
      </a>
    </p>

    <p>
      <Link href="/lazy">
        <a>The /lazy route</a>
      </Link>{' '}
      uses <code>React.lazy</code> to load a the slow-fetch component.
    </p>

    <ul>
      <li>
        <p>
          In development, the browser's loading indicator stops before the
          component un-suspends and the button is interactive before the slow
          fetch is ready.
        </p>
      </li>
      <li>
        <p>
          In production, the loading indicator continues until the component
          un-suspends and the button is not interactive until then.
        </p>
      </li>
    </ul>

    <p>
      <Link href="/nonlazy">
        <a>The /nonlazy route</a>
      </Link>{' '}
      is a regular component import of the slow fetch component.
    </p>

    <ul>
      <li>
        <p>
          In development <em>and</em> production, the loading indicator
          continues until the component un-suspends and the button is not
          interactive until then.
        </p>
      </li>
    </ul>
  </>
)

export default Info
