import { LOGIN, LOGOUT, SIGNUP } from "../reducers/Type";
import { auth, db } from "../../config/Firebase";
import UseSignUp from "../../modules/auth/signup/UseSignup";
import { Alert } from "react-bootstrap";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";

export const doLogin = (data) => async (dispatch) => {
    try {
        let auth =   getAuth();
        let userCredential= await signInWithEmailAndPassword(auth, data.Email, data.Password)
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

export const doSignUp = (data) => async (dispatch) => {
 
    try {
     
        let auth =   getAuth();
        let userCredential= await createUserWithEmailAndPassword(auth, data.email, data.password)
     
        var user = userCredential.user;
        console.log("action is working");
        console.log("user", user.uid)
        dispatch({
            type: SIGNUP,
            payload: user,
        });
    } catch (error) {
        alert(JSON.stringify(error))
        console.log("error",error);

    }
    finally{
        // setLoading(false)
    }
}