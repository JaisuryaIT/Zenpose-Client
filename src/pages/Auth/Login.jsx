import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://zenpose.solvixsoftworks.com/api/login", { email, password });
      if (response.status === 200) {
        const { user_id } = response.data;
        Cookies.set("auth_token", user_id, { expires: 7, secure: true, sameSite: "Strict" });
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  // Styles
  const styles = {
    loginContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(45deg, #ff0000, #ff7300, #ffeb00, #47ff00, #00ffee, #2b65ff, #8000ff, #ff0080)",
      backgroundSize: "400% 400%",
      animation: "moveGradient 11s ease-in-out infinite alternate",
    },
    loginBox: {
      background: "#ffffff",
      borderRadius: "12px",
      padding: "20px",
      width: "25%",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      textAlign: "center",
      position: "relative",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
    backButton: {
      position: "absolute",
      left: "0px",
      fontSize: "1.5rem",
      cursor: "pointer",
      color: "#333",
      background: "none",
      border: "none",
    },
    gradientText: {
      background: "linear-gradient(45deg, #ff0000, #ff7300, #ffeb00, #47ff00, #00ffee, #2b65ff, #8000ff, #ff0080)",
      backgroundSize: "400% 400%",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "bold",
      fontSize: "1.8rem",
      animation: "moveGradient 5s ease-in-out infinite alternate",
   },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      background: "#f9f9f9",
      color: "#333",
      fontSize: "1rem",
      marginTop: "5px",
      marginBottom: "15px",
      outline: "none",
    },
    button: {
      width: "100%",
      padding: "10px",
      border: "none",
      borderRadius: "8px",
      fontSize: "1.2rem",
      fontWeight: "bold",
      cursor: "pointer",
      color: "white",
      background: "linear-gradient(135deg, #8000ff, #ff0080, #00ffee, #2b65ff)",
      backgroundSize: "300% 300%",
      animation: "moveGradient 2s ease-in-out infinite alternate",
      transition: "transform 0.2s ease-in-out",
    },
    buttonHover: {
      transform: "scale(1.05)",
    },
  };

  return (
    <>
      <style>
        {`
          @keyframes moveGradient {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          ::placeholder {
            color: #777;
          }
            .gradient-text {
            background: linear-gradient(45deg, #ff0080, #00ffee, #ff9f40, #40e0d0);
            background-size: 400% 400%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: bold;
            font-size: 1.8rem;
            animation: moveGradient 3s ease-in-out infinite alternate;
          }

          .gradient-button {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
            color: white;
            background: linear-gradient(45deg, #ff0080, #00ffee, #ff9f40, #40e0d0);
            background-size: 300% 300%;
            animation: moveGradient 2s ease-in-out infinite alternate;
            transition: transform 0.2s ease-in-out;
          }

          .gradient-button:hover {
            transform: scale(1.05);
          }
        `}
      </style>

      <div style={styles.loginContainer}>
        <div style={styles.loginBox}>
          <div style={styles.header}>
            <button onClick={handleBack} style={styles.backButton}>⬅</button>
            <h2 style={{ ...styles.gradientText, marginLeft: "30px" }}>Login</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter Email" autoComplete="off" style={styles.input} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Enter Password" autoComplete="off" style={styles.input} onChange={(e) => setPassword(e.target.value)} />

            <button type="submit" style={styles.button}>Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;