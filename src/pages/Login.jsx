import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    axios.post("https://shophub-ecommerce-7gbt.onrender.comapi/auth/login", {
      email,
      password,
    }).then(res => {
       console.log("LOGIN RESPONSE:", res.data);
      localStorage.setItem("token", res.data.token);
       localStorage.setItem("userName", res.data.user.name);

  alert("Login Successful");
  window.location.href = "/";
});
  };

  return (
    <div>
      <h1>Login</h1>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={loginUser}>Login</button>
    </div>
  );
}

export default Login;