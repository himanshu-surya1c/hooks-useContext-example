//without using context passing down props
// code from  line no 5 to 17

// import "./styles.css";
// import { useState } from "react";
// import Login from "./components/Login";
// import UserName from "./components/UserName";

// export default function App() {
//   const [username, setUsername] = useState("");
//   return (
//     <div className="App">
//       <UserName setUsername={setUsername} />
//       <Login username={username} />
//     </div>
//   );
// }

import "./styles.css";
import { useState, createContext } from "react";
import Login from "./components/Login";
import UserName from "./components/UserName";

export const AppContext = createContext();

export default function App() {
  const [username, setUsername] = useState("");
  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <div className="App">
        <UserName />
        <Login />
      </div>
    </AppContext.Provider>
  );
}
