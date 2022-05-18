import React from 'react'
import ShoppingPage from '../components/CartTwo/App'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()
const Shopping = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ShoppingPage />
    </QueryClientProvider>
  )
}

export default Shopping