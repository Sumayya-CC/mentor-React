import React, {createContext, useState} from "react";
const UserContext = createContext();


const UserProvider = (props) => {

 const [login, setLogin] = useState(false);
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 

 return (
   <UserContext.Provider value={{
     login, setLogin, name, setName, email, setEmail }}>
     {props.children}
   </UserContext.Provider>
 );
}
export { UserContext, UserProvider };