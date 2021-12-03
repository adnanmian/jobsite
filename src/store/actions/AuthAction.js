import { LOGIN, LOGOUT, SIGNUP } from "../reducers/Type";
import { auth, db } from "../../config/Firebase";
import UseSignUp from "../../modules/auth/signup/UseSignup";
import { Alert } from "react-bootstrap";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const doLogin = (data) => async (dispatch) => {
    try {
        let auth =   getAuth();
        let userCredential= await createUserWithEmailAndPassword(auth, data.Email, data.Password)
//         const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
        var user = userCredential.user;
        console.log("action is working");
        console.log("user", user.uid)
        dispatch({
            type: LOGIN,
            payload: user,
        });
    } catch (error) {
        console.log(JSON.stringify(error))
    }
}



//logout feature
export const doLogout = () => async (dispatch) => {
    try {
        const res = await auth.signOut();

        // var res = userCredential.user;
        console.log("res", res)
        dispatch({
            type: LOGOUT,
           
        });
    } catch (error) {
        alert(JSON.stringify(error))
    }
}

export const doSignUp = (setLoading, user) => async (dispatch) => {
 
    try {
        alert("naved")
        console.log("user",user);
        // setLoading(true)
        let auth =   getAuth();
        let userCredential= await createUserWithEmailAndPassword(auth, user.Email, user.Password)
        var userData = userCredential.user;
        alert("data",userData)
            // await  db.collection("users").add({
            //       ...user,
            //        uid: userData.uid
            //     });
        dispatch({
            type: LOGIN,
            payload: userData,
        });
    } catch (error) {
        alert(JSON.stringify(error))
        console.log("error",error);
        // { error && <Alert varient="danger" >{error}</Alert>}
    }
    finally{
        // setLoading(false)
    }
}