import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthtantication from "../Firebase/firebase.init";

initializeAuthtantication();

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();




const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [photo, setPhoto] = useState("")

    //  google sign in
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
            })
            .catch(err => {

                setError(err.message)
            })
    }



    //  get email input value
    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    //  get password input value
    const getPassWord = (e) => {
        setPassword(e.target.value)
    }
    //  get name input value
    const getName = (e) => {
        setName(e.target.value)
    }
    //  get photo input value
    const getPhoto = (e) => {
        setPhoto(e.target.value)
    }

    // send email verification func
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert(`An Verification mail has been set to ${email}`)
            });
    }

    // sign in with email and password
    const SignInWithEmail = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user)
            })
            .catch((err) => {
                setError(err.message)
            });

    }

    // set name and Photo 
    const setNameAndPhoto = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        }).then(() => { }).catch((err) => {
            setError(err.message)
        });
    }

    // sign up with email password name photo
    const signUp = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setNameAndPhoto()
                verifyEmail()
                setUser(userCredential.user)
                alert("user has been created")
            })
            .catch((err) => {
                setError(err.message)
            });
    }

    // cler error
    useEffect(() => {
        setTimeout(() => {
            setError("")
        }, 5000)
    }, [error])

    // password reset
    const passwordReset = (e) => {
        e.preventDefault()
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("password reset email has been sent");
            })
            .catch((err) => {
                setError(err.message);
            });
    }




    //  logout
    const Logout = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((err) => {
            setError(error.message)
        });
    }
    //  tracker for crurent user
    useEffect(() => {
        onAuthStateChanged(auth, (Signeduser) => {
            if (Signeduser) {
                setUser(Signeduser)
            }
        });
    }, [])


    return {
        signInWithGoogle,
        user,
        Logout,
        error,
        getPassWord,
        getEmail,
        SignInWithEmail,
        getName,
        getPhoto,
        signUp,
        passwordReset
    }
}

export default useFirebase;