import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

import {MyApp} from "./MyApp.tsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 10,
            gcTime: 1000 * 60 * 60,
            queryFn: () => Promise.resolve(2),
            initialData: 1
        }
    }
})

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <MyApp/>
                <ReactQueryDevtools initialIsOpen/>
            </QueryClientProvider>
        </>
    )
}

export default App
