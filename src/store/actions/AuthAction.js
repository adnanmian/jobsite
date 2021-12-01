import { LOGIN, LOGOUT, SIGNUP } from "../reducers/Type";
import { auth, db } from "../../config/Firebase";
import UseSignUp from "../../modules/auth/signup/UseSignup";
import { Alert } from "react-bootstrap";
export const doLogin = (email, password) => async (dispatch) => {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password)
        var user = userCredential.user.uid;
        console.log(user)
        dispatch({
            type: LOGIN,
            payload: user,
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
        const userCredential = await auth.createUserWithEmailAndPassword(user.email, user.password);
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