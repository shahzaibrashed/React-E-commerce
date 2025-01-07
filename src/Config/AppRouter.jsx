import { BrowserRouter as Router , Routes , Route , } from "react-router-dom";
import { RouterList } from "../Utils/RouterList";
import ScrollToTop from "../Components/ScrollToTop";

const AppRouter = () => {
  return (
    <Router>
       <ScrollToTop />
<Routes>

{
  RouterList.map((e,i)=>{
    return <Route key={i} path={e.path} element={e.element}/>
  })
}
    
</Routes>

    </Router>
  )
}
export default AppRouter;