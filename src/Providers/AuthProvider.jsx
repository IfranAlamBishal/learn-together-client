import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, GithubAuthProvider } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateName = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    const updatePhoto = (photo) => {
        return updateProfile(auth.currentUser, {
            photoURL: photo
        })
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const gitLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, gitProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSUbscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSUbscribe();
        }
    }, []);

    const contextItems = {
        user,
        loading,
        createUser,
        updateName,
        updatePhoto,
        logIn,
        googleLogIn,
        gitLogIn,
        logOut
    }

    return (
        <AuthContext.Provider value={contextItems}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;