import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";
import Watch from "./pages/Watch";
import Favorites from "./components/Favorites";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } ></Route>
                <Route path="/watch/:id" element={ <Watch /> } ></Route>
                <Route path="/search" element={ <Search /> } ></Route>
                <Route path="/favorites" element={ <Favorites /> } ></Route>
                <Route path="*" element={ <PageNotFound /> } ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
