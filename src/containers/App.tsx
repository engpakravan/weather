import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ROUTE_HOME} from "../constants/routes";
import {Home} from "./home";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools"

const queryClient = new QueryClient();
function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
                <Route path={ROUTE_HOME} element={<Home/>}/>
            </Routes>
        </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
  );
}

export default App;
