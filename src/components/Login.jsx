import { useState } from "react";
import "./Login.css"
export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <section className={`wrapper ${isLogin ? "active" : ""}`}>
      <div className="form signup">
        <header onClick={() => setIsLogin(false)}>Signup</header>
        <form action="#">
          <input type="text" placeholder="Full name" required />
          <input type="text" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <div className="checkbox">
            <input type="checkbox" id="signupCheck" />
            <label htmlFor="signupCheck">I accept all terms & conditions</label>
          </div>
          <input type="submit" value="Signup" />
        </form>
      </div>

      <div className="form login">
        <header onClick={() => setIsLogin(true)}>Login</header>
        <form action="/Slider">
          <input type="text" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <a href="#">Forgot password?</a>
          <input type="submit" value="Login" />
        </form>
      </div>
    </section>
  );
}