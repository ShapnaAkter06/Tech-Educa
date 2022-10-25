import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    //1. For signup or registration
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user name
    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile)
    }

    // For login
    const SignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Send email verification msg
    const emailVerified = () => {
        setLoading(true);
        return sendEmailVerification(auth.currentUser)
    }

    // Google SignIn
    const signInWithGoogle = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    // logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    //reset password
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        // eta run hobe jokhon component mount(mane jokhon component open korbo) hobe
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })

        return () => {
            // eta run hobe jokhon component unmount(mane jokhon oi component theke onno component a jabo) hobe
            unsubscribe()
        }

    }, [])


    const authInfo = { createUser, SignIn, signInWithGoogle, updateUserProfile, emailVerified, user, logOut, resetPassword, loading }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;