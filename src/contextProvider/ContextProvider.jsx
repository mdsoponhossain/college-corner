import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { toast } from "react-toastify";
export const AuthContext = createContext(null);
const ContextProvider = ({ children }) => {
    const [searchText, setSearchText] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isDataLoading, setIsDataLoading] = useState(false)

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchText(e.target.searchText.value)
    };

    //persistency of the current user:
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setCurrentUser(currentUser);
            setIsLoading(false)
        })
    }, []);

    //handle sign up:
    const handleSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // handle sign out:
    const handleSignOut = () => {
        signOut(auth).then(() => { }).catch(() => { })
    };

    // handle sign in:
    const handleSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //handle user profile update:
    const handleUpdateProfile = (profileInfo) => {
        return updateProfile(auth.currentUser, {
            displayName: profileInfo?.name,
            photoURL: profileInfo?.img
        })
    }

    //password set handling:
    const handleResetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    };

    const notify = (text) => toast(`${text}`);



    const authInfo = {
        handleSearch,
        searchText,
        handleSignUp,
        handleUpdateProfile,
        currentUser,
        handleSignOut,
        handleSignIn,
        isLoading,
        handleResetPassword,
        isDataLoading,
        setIsDataLoading,
        notify
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;