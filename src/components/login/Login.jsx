import { useState } from "react";
import "./login.css";
import { auth, db } from "../../lib/firebase";
import { toast } from "react-toastify";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload";
const Login = () => {
    const [avatar, setAvatar] = useState({
        file:null,
        url:""
    });
    const handleImage = (e) => {
        if(e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    };
    const handleLogin = (e) => {
        e.preventDefault();
        
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const {username, email, password} = Object.fromEntries(formData);
        
        try {
            const data = await createUserWithEmailAndPassword(auth,email,password);

            const imgURL = await upload(avatar.file);
            await setDoc(doc(db,"users",data.user.uid),{
               username,
               email,
               id: data.user.uid,
               blocked: [],
            });

            await setDoc(doc(db,"userchats",data.user.uid),{
                chats: [],
             });
            toast.success("User Created Successfully");
        } catch (error) {
            toast.error(error.message);
        }
    }
  return (
    <div className="login">
        <div className="item">
            <h2>Welcome back,</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Email" name="email"/>
                <input type="password" placeholder="Password" name="password"/>
                <button>Sign In</button>
            </form>
        </div>
        <div className="separator"></div>
        <div className="item">
            <h2>Create an Account</h2>
            <form onSubmit={handleSignUp}>
                <label htmlFor="file">
                <img src={avatar.url || "./avatar.png"} alt="" />
                    Upload an image</label>
                <input type="file" id="file" style={{display: "none"}} onChange={handleImage}/>
                <input type="text" placeholder="UserName" name="username"/>
                <input type="text" placeholder="Email" name="email"/>
                <input type="password" placeholder="Password" name="password"/>
                <button>Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default Login