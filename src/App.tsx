import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from './layouts/home'
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import EnVivo from './layouts/EnVivo';
import ViewMatch from './pages/ViewMatch';
import OverviewMatch from './pages/OverviewMatch';

function App() {
  return (
    <HomeLayout>
      {/* <BrowserRouter basename={`${import.meta.env.BASE_URL}`}> */}
      <BrowserRouter basename={`/`}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="en-vivo/match" element={<EnVivo />}>
            <Route path="overview/:type" element={<OverviewMatch />} />
            <Route path=":category/:country/:league/:match">
              <Route index element={<ViewMatch />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HomeLayout>
  )
}

export default App
