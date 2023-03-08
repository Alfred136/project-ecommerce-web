// styles
import '@/styles/globals.scss'

// packages
import { useState, useEffect } from 'react'
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'

// components
import { Layout } from '@/layouts/Layout'
import { LoadingScreen } from '@/components'
import { StateContext } from '@/context/stateContext'
import { ProductsContext } from '@/features/products'

//hooks
import { useLoading } from '@/hooks/useLoading'


export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient())
  const [loading, setLoading] = useLoading()

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <StateContext>
          <Layout>
            <Toaster />
            <ProductsContext>
              <Component {...pageProps} />
              {loading ? <LoadingScreen /> : null}
            </ProductsContext>
            <ReactQueryDevtools initialIsOpen={false} />
          </Layout>
        </StateContext>
      </Hydrate>
    </QueryClientProvider>
  )
}
