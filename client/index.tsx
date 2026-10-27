import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import router from './router'

const queryClient = new QueryClient()
const createBrowerRouter = createBrowserRouter(router)

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={createBrowerRouter} />
      <ReactQueryDevtools />
    </QueryClientProvider>,
  )
})
