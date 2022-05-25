// //without using context passing down props

// import React from "react";

// function UserName({ setUsername }) {
//   return (
//     <div>
//       <h1>
//         <input
//           onChange={(event) => {
//             setUsername(event.target.value);
//           }}
//           placeholder="Enter Name"
//         />
//       </h1>
//     </div>
//   );
// }
// export default UserName;

import React, { useContext } from "react";
import { AppContext } from "../App";

function UserName() {
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      <h1>
        <input
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          placeholder="Enter Name"
        />
      </h1>
    </div>
  );
}
export default UserName;
