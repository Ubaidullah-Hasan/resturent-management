import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, deleteUser, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../Firebase/firebase';
export const AuthContext = createContext();

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);
    const auth = getAuth(app);

    const userRegister = (email, password) => {
        setAuthLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        setAuthLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google login
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = (email, password) => {
        return signInWithPopup(auth, googleProvider);
    };


    // log out
    const logOut = () => {
        return signOut(auth);
    }

    // reset password
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    // delete account
    const deleteAccount = () => {
        return deleteUser(auth.currentUser);
    }

    // check user status
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setAuthLoading(false);
        })
        return () => {
            return unSubscribe();
        }
    }, [])



    const authInfo = {
        user,
        authLoading,
        userRegister,
        userLogin,
        googleLogin,
        logOut,
        resetPassword,
        deleteAccount,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;