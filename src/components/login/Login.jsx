import "./login.css";

const Login = () => {
  return (
    <div className="login">
        <div className="item">
            <h2>Welcome back,</h2>
            <form >
                <input type="text" placeholder="Email" name="email"/>
                <input type="password" placeholder="Password" name="password"/>
                <button>Sign In</button>
            </form>
        </div>
        <div className="separator"></div>
        <div className="item">
            <h2>Create an Account</h2>
            <form >
                <label htmlFor="file">Upload an image</label>
                <input type="file" id="file" style={{display: "none"}}/>
                <input type="text" placeholder="UserName" name="username"/>
                <input type="text" placeholder="Email" name="email"/>
                <input type="password" placeholder="Password" name="password"/>
                <button>Sign In</button>
            </form>
        </div>
    </div>
  )
}

export default Login