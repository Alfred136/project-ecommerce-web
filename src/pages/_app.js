// styles
import '@/styles/globals.scss'

// packages
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// components
import { Toaster } from 'react-hot-toast'
import { Layout } from '@/layouts/Layout'
import { StateContext } from '@/context/stateContext'
import { ProductsContext } from '@/features/products'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <StateContext>
          <Layout>
            <Toaster />
            <ProductsContext>
              <Component {...pageProps} />
            </ProductsContext>
          </Layout>
        </StateContext>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  )
}
