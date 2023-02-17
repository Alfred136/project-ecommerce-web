// styles
import '@/styles/globals.scss'

// packages
import { useState } from 'react'
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// components
import { Toaster } from 'react-hot-toast'
import { Layout } from '@/layouts/Layout'
import { StateContext } from '@/context/stateContext'
import { ProductsContext } from '@/features/products'

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <StateContext>
          <Layout>
            <Toaster />
            <ProductsContext>
              <Component {...pageProps} />
            </ProductsContext>
            <ReactQueryDevtools initialIsOpen={false} />
          </Layout>
        </StateContext>
      </Hydrate>
    </QueryClientProvider>
  )
}
