import { Button } from "@material-ui/core";
import { auth,provider } from "./firebase";
import React from 'react';
import "./Login.css";

function Login() {
    const signIn = e => {
        //do clever google login shizz......
        auth.signInWithPopup(provider)
        .catch(error =>alert(error.messaage));
    };
        return (
            <div className="login">
                <h2></h2>
            <div className="login__logo">
                <img
                    src="https://image.freepik.com/free-vector/geek-logo-design-template_7492-36.jpg"
                    alt=""
                />
            </div>
            <Button onClick={signIn}>Sign In</Button>

            </div>

        );
    }

export default Login;
