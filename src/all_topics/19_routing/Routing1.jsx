import Navbar from "../../components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
// yeh lazy ek method hai react ka jo ki use hota hai code splitting krne ke liye mtlb ui pr jo component ek baar mein ssare render n ho jaaye jo chahiye wahi ho jise optimize hota hai .
// Suspense ek component hai jo ki use hota hai jb targeted component render hone mein time lga rha ho toh fallback ki help se us time tk jo likha ho woh dikhega .

// import Home from "../../Pages/Home";
// import Carrers from "../../Pages/Carrers";
// import About from "../../Pages/About";
// import NotFound from "../../Pages/NotFound";

const Home = lazy(() => import("../../Pages/Home"));
const About = lazy(() => import("../../Pages/About"));
const Carrers = lazy(() => import("../../Pages/Carrers"));
const NotFound = lazy(() => import("../../Pages/NotFound"));

//  There are 2 types of routing technique  -> 1. Browser Router

const Routing1 = () => {
  return (
    <div>
      {/* <h1 className='text-center'>Routing 1</h1> */}
      <Suspense fallback={<h1>Loading</h1>}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<Carrers />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default Routing1;

// BrowserRouter ke andar agr multiple routes hai toh <routes> ke andar woh <route> likhenge
// Route apne properties mein 2 attribute ko accept krta hai 1. Path  2. element
