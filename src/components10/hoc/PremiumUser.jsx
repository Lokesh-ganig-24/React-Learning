import React from "react";
import HOCUser from "./HOCUser";
import NormalUserComponent from "./NormalUserComponent";
/* import HocUser from "./HocUser"; */

function PremiumUser() {
  return (
    <>
      <NormalUserComponent />
    </>
  );
}

export default HOCUser(PremiumUser);