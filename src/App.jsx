import React, { createContext } from 'react'
import SecondComponent from './API/SecondComponent';
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
//import Routing from "./components10/Routing"
//import Function1 from './components10/Function1';
//import Function2 from './components10/Function2';
//import NormalComponent from './components10/hoc/NormalComponent';
//import UpdatedComponent from './components10/hoc/UpdatedComponent';
//import NormalUserComponents from './components10/hoc/NormalUserComponent';
//import PremiumUser from './components10/hoc/PremiumUser';
import GetApiData from './API/GetApiData';
import Ipl from './API/ipl';
import FnUnmount from './API/FnUnmount';
import MemoExample from './API/MemoExample';
import { AuthProvider } from './API/AuthProvider';
// import ProductView from './components10/Produ/ProductView'
/* import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import Sample from './components10/Sample' */


/* 
 export const UserContext =React.createContext();
function App() {
  const user = "David";
   return (
    <UserContext.Provider value={user}>
      <h1>App Component</h1>
      <SecondComponent />
      <MemoExample/>
    </UserContext.Provider>
  );
} 

 */











export const UserContext = React.createContext();

function App() {
  const { isLoggedIn, setIsLoggedIn } = UserContext(AuthContext);

  return (
    <div>
      <h1>Simple Auth Example</h1>

      {isLoggedIn ? (
        <>
          <h2>Welcome User ✅</h2>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please Login ❌</h2>
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        </>
      )}
    </div>
  );
}







  /*  const isUser=false;
  const data=isUser?<Function1/>:<Function2/> */
//return(
 <>

{/* <div>

  <Ipl name="rcb" handle={gofortrophy}/>
</div> */}


  {/*  <Routing/> */}
  {/* <NormalComponent name="Normal"/>
  <UpdatedComponent name="Updated"/> */}

  {/* <NormalUserComponents/>
  <PremiumUser/> */}

//{/* <Ipl/> */}{/*  */}

 {/*  <GetApiData/> */}
 {/* <FnUnmount/> */}
<AuthProvider/>
 
 </>
//)

export default App;


