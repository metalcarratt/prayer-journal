import loadScript from './loadScript.js';
import { useEffect, useState } from 'react';

function GoogleLogin() {   
    const [userCred, setUserCred] = useState('');

    useEffect(() => {
        loadScript();
        window.googleLoginCallback = googleLoginCallback;
    });

    function googleLoginCallback(response) {
        console.log("Callback");
        console.log(response);
        setUserCred(response.credential);
    }

    return (
        <div>
           {
               userCred !== '' ?
               <div><b>Credential:</b> - { userCred }</div>
               :
               <div>
                <div id="g_id_onload"
                    data-client_id="591087937539-pkde4uge6n5r244m9qrng9lq2kb78qqb.apps.googleusercontent.com"
                    data-callback="googleLoginCallback"
                    data-auto_prompt="false">
                </div>
                <div className="g_id_signin"
                    data-type="standard"
                    data-size="large"
                    data-theme="outline"
                    data-text="sign_in_with"
                    data-shape="rectangular"
                    data-logo_alignment="left">
                </div>
               </div>
           }
            
        </div>
    );
}

export default GoogleLogin;