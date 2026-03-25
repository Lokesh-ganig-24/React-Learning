import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import SideEffect from "./SideEffect";
import ProductView from "./ProductView";
import Balance from "./Balance";
import Param from "./Param";

function Routing() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul className="navbar">
                        <li>
                            <Link to="">Home</Link>
                        </li>
                        <li>
                            <Link to="/landing">Landing</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="" element={<Balance />} />
                    <Route path="/landing" element={<ProductView />} />
                    <Route path="/prod/:prodId" element={<Param />} />
                    <Route path="/dashboard" element={<SideEffect />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

// function Routing() {
//   return (
//     <>
//       <BrowserRouter>
//         <div>
//           <Routes>
//             <Route path="/" element={<ProductView />} />
//             <Route path="/prod/:prodId" element={<Param />} />
//           </Routes>
//         </div>
//       </BrowserRouter>
//     </>
//   );
// }

export default Routing; 