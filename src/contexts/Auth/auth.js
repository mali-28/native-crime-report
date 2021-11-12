import React, { createContext, useState } from "react";
const obj = {
    user : {},
    setUser: () => {},
    isLogin : false,
    setIsLogin : () =>{}, 
}

const AuthContext = createContext(obj);
const allUsers = [
    {
        id: "id1",
        fname: "fname1",
        lname: "lname1",
        phone : "phone1",
        token : "token1",
        email : "email1",
        isAdmin : true, 
        isSuperAdmin : false
    },
    {
        id: "id2",
        fname: "fname2",
        lname: "lname2",
        phone : "phone2",
        token : "token2",
        email : "email2",
        isAdmin : false, 
        isSuperAdmin : false
    },
    {
        id: "id3",
        fname: "fname3",
        lname: "lname3",
        phone : "phone3",
        token : "token3",
        email : "email3",
        isAdmin : false, 
        isSuperAdmin : false
    },
    {
        id: "id4",
        fname: "fname4",
        lname: "lname4",
        phone : "phone4",
        token : "token4",
        email : "email4",
        isAdmin : true, 
        isSuperAdmin : true
    },
    {
        id: "id5",
        fname: "fname5",
        lname: "lname5",
        phone : "phone5",
        token : "token5",
        email : "email5",
        isAdmin : true, 
        isSuperAdmin : true
    },
];

const Auth = (props) => {
const [user,setUser] = useState(allUsers);
const [isLogin, setIsLogin] = useState(false);


    return <>
        <AuthContext.Provider value={{user,setUser ,isLogin, setIsLogin}}>
            {props.children}
        </AuthContext.Provider>
    </>
}
export default Auth;
export { AuthContext };