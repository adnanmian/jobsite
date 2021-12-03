import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { doLogin } from '../../../store/actions/AuthAction';
// import { doLogout } from '../../store/Actions/AuthAction';
export default function UseLogin() {
    
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const  dispatch = useDispatch();
        const data ={
           Email: email,
            Password:password
            
        }
        const doLoginUser = () =>{
            dispatch(doLogin(data));
        }
      

    return[setEmail,setPassword,doLoginUser,email,password]
}