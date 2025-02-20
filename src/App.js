import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import { Toaster } from "react-hot-toast";
const AppRouter = lazy(() => import('./Config/AppRouter'));
function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <ScaleLoader color="var(--salmon-pink)" height={90} radius={8} width={6} />
          </div>
        }>
        <AppRouter />
        <Toaster position="top-right" reverseOrder={false} />
      </Suspense>
    </BrowserRouter>
  );
}
export default App;
