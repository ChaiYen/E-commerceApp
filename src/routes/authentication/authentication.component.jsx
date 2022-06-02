
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';    
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.component.scss'
const Authentication = () =>{
    
    return (
        <div className='authentication-container'>
            <SignInForm/>
            {/* <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button> */}
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
            <SignUpForm/>
        </div>
    );
};
export default Authentication;