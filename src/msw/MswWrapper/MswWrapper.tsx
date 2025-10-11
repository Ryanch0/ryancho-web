'use client'

import { PropsWithChildren, useEffect, useState } from 'react'

import { setupWorker } from 'msw/browser'

const worker = setupWorker() //TODO add mock api

export default function MswWrapper({ children }: PropsWithChildren) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_API_MOCKING !== 'true') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setReady(true)

      return
    }
    worker.start({ onUnhandledRequest: 'bypass' }).then(() => setReady(true))
  }, [])

  if (!ready) return null

  return <>{children}</>
}
