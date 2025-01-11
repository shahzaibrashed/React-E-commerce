import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
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
      </Suspense>
    </BrowserRouter>
  );
}
export default App;
