//without using context passing down props

// function Login({ username }) {
//   return (
//     <div>
//       <h2>Name :{username} </h2>
//     </div>
//   );
// }

// export default Login;

import React, { useContext } from "react";
import { AppContext } from "../App";

function Login() {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h2>Name :{username} </h2>
    </div>
  );
}

export default Login;
