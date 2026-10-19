import "./LoginRegister.css";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [show, setShow] = useState(false);
  return (
    <div className="login-register-user">
      <div className="login-register-box">
        <h2 className="login-register-title">
          <span
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </span>
          <span
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Register
          </span>
        </h2>

        <p className="login-register-text">
          {isLogin
            ? "If you have an account, sign in with your username or email address."
            : "There are many advantages to creating an account: the payment process is faster, shipment tracking is possible and much more."}
        </p>

        <label>{isLogin ? "Email address or username" : "Email Address"}</label>
        <input type="text" placeholder="." />

        {!isLogin && (
          <div>
            <label>Username</label>
            <input type="text" placeholder="." />
          </div>
        )}
        <label>Password</label>
        <div className="login-register-password">
          <input type={show ? "text" : "password"} placeholder="." />
          <button type="button" onClick={() => setShow(!show)}>
            {show ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>
        {isLogin ? (
          <div className="login-register-selection">
            <label>
              <input type="checkbox" />
              Remenber me
            </label>
            <a href="#">Lost your password?</a>
          </div>
        ) : (
          <p className="register-text">
            Your personal data will be used to support your experience
            throughout <br /> this website, to manage access to your account,
            and for other purposes <br /> described in our privacy policy.
          </p>
        )}
        <button className="login-register-btn">
          {isLogin ? "Login" : "Register"}
        </button>
      </div>
    </div>
  );
};

export default LoginRegister;
