import {app} from './index.js';
import { getAuth, signInWhitPopup, GoogleAuthProvider, signOut} from 'firebase/auth';


const auth = getAuth(app);
const provider= new GoogleAuthProvider();

const loginGoogle= () => {
    signInWhitPopup(auth, provider)
    .then((result)=>{
        console.log('result',result);
    })
    .catch ((error) =>{
        console.warn('error', error);
    })
}

function logOut (){
    signOut(auth).then(() =>{

    }).catch((error)=>{

    });
}

export{ loginGoogle,logOut}