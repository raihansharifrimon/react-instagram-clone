import React, { createContext } from 'react';
import {auth} from '../config';
export const ContextProvider = createContext();

const Context = (props) => {
    const [model, setModel] = React.useState(false);
    const [user, setUser] = React.useState(null);
    const [loader, setLoader] = React.useState(true);

    const openModel = () => {
        setModel(true);
    }
    const closeModel = () => {
        setModel(false)
    };

    //   user registration data sent to firebase
    const register = async (user) => {
        const {username, email, password} = user;
        try {
            const res = await auth.createUserWithEmailAndPassword(email, password)
            res.user.updateProfile({displayName: username})
            setModel(false)

        } catch (error) {
            console.log(error.message);
        }
    };

    // user login 
    const login = async user => {
        const {email, password} = user;

        try {
            const res = await auth.signInWithEmailAndPassword(email, password);
            setModel(false)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
       auth.onAuthStateChanged(user => {
           setUser(user);
           setLoader(false);
       })
    },[]);

    //  logout user
    const logOut = () => {
        auth.signOut().then(() => {
            setUser(null);
        }).catch ((err) => {
            console.log(err);
        })
    }

    return (
        <ContextProvider.Provider value={{model, openModel, closeModel, register, login, user, loader, logOut }}>
            {props.children}
        </ContextProvider.Provider>
    )
}

export default Context
