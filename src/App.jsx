import { useState } from 'react'

import './App.css'
// import ImageSample from './components10/ImageSample';
// import Dashboard from './components10/Dashboard';
// import Classone from './components10/Classone';
// import Button from './components10/Button';
// import Team from './assets/Team';
// import StateComponents from './components10/StateComponents';
// import ImageChange from './components10/ImageChange';
// import LearnFragment from './components10/LearnFragment';
// import LearnUseState from './components10/LearnUseState';
// import LearnCounter from './components10/LearnCounter';
// import Change from './components10/Change';
// import Balance from './components10/Balance';
// import SideEffect from './components10/SideEffect';
// // import Routing from './components10/Routing';
// import ProductCard from './components10/ProductCard';
// import Dash from './components10/Dash';
import Routing from "./components10/Routing"
import Function1 from './components10/Function1';
import Function2 from './components10/Function2';
// import ProductView from './components10/Produ/ProductView'
/* import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import Sample from './components10/Sample' */

function App() {
   const isUser=false;
  const data=isUser?<Function1/>:<Function2/>
return(
 <>
   <Routing/>
  
 </>
)
}
export default App;

