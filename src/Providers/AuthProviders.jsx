import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, deleteUser, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/firebase';
export const AuthContext = createContext(null);

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
    const googleLogin = () => {
        setAuthLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Facebook login
    const facebookProvider = new FacebookAuthProvider();
    const facebookLogin = () => {
        setAuthLoading(true);
        return signInWithPopup(auth, facebookProvider);
    };

    // update user profile
    const updateUser = (name, imgURL) => {
        setAuthLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: imgURL
        })
    }


    // log out
    const logOut = () => {
        setAuthLoading(true);
        return signOut(auth);
    }

    // reset password
    const resetPassword = (email) => {
        setAuthLoading(true);
        return sendPasswordResetEmail(auth, email);
    }

    // delete account
    const deleteAccount = () => {
        setAuthLoading(true);
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
        facebookLogin,
        updateUser,
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