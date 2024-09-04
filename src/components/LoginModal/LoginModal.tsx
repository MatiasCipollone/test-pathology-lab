import React from "react";
import style from "./style/style.module.css";
import { I_LoginModal } from "./interface";
import Link from "next/link";

const LoginModal: React.FC<I_LoginModal> = ({
  buttonColor,
  textColor,
  onLogin,
}) => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(true);

  const handleLogin = () => {
    onLogin(userName, password);
  };

  return (
    <div className={style.modal}>
      <div className={style.modal_content}>
        <h2 style={{ color: textColor }} className={style.title}>
          Login
        </h2>

        <div className={style.inputGroup}>
          <label
            className={style.labelForm}
            htmlFor="userName"
            style={{ color: textColor }}
          >
            Username:
          </label>
          <input
            type="userName"
            id="userName"
            value={userName}
            className={style.inputForm}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className={style.inputGroup}>
          <label
            htmlFor="password"
            className={style.labelForm}
            style={{ color: textColor }}
          >
            Password:
            <span
              className={style.eyeIcon}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg
                  width="22"
                  height="15"
                  viewBox="0 0 22 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 4.5C10.2044 4.5 9.44129 4.81607 8.87868 5.37868C8.31607 5.94129 8 6.70435 8 7.5C8 8.29565 8.31607 9.05871 8.87868 9.62132C9.44129 10.1839 10.2044 10.5 11 10.5C11.7956 10.5 12.5587 10.1839 13.1213 9.62132C13.6839 9.05871 14 8.29565 14 7.5C14 6.70435 13.6839 5.94129 13.1213 5.37868C12.5587 4.81607 11.7956 4.5 11 4.5ZM11 12.5C9.67392 12.5 8.40215 11.9732 7.46447 11.0355C6.52678 10.0979 6 8.82608 6 7.5C6 6.17392 6.52678 4.90215 7.46447 3.96447C8.40215 3.02678 9.67392 2.5 11 2.5C12.3261 2.5 13.5979 3.02678 14.5355 3.96447C15.4732 4.90215 16 6.17392 16 7.5C16 8.82608 15.4732 10.0979 14.5355 11.0355C13.5979 11.9732 12.3261 12.5 11 12.5ZM11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0Z"
                    fill="black"
                  />
                </svg>
              ) : (
                <svg
                  width="22"
                  height="15"
                  viewBox="0 0 22 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.83 6L14 9.16V9C14 8.20435 13.6839 7.44129 13.1213 6.87868C12.5587 6.31607 11.7956 6 11 6H10.83ZM6.53 6.8L8.08 8.35C8.03 8.56 8 8.77 8 9C8 9.79565 8.31607 10.5587 8.87868 11.1213C9.44129 11.6839 10.2044 12 11 12C11.22 12 11.44 11.97 11.65 11.92L13.2 13.47C12.53 13.8 11.79 14 11 14C9.67392 14 8.40215 13.4732 7.46447 12.5355C6.52678 11.5979 6 10.3261 6 9C6 8.21 6.2 7.47 6.53 6.8ZM1 1.27L3.28 3.55L3.73 4C2.08 5.3 0.78 7 0 9C1.73 13.39 6 16.5 11 16.5C12.55 16.5 14.03 16.2 15.38 15.66L15.81 16.08L18.73 19L20 17.73L2.27 0M11 4C12.3261 4 13.5979 4.52678 14.5355 5.46447C15.4732 6.40215 16 7.67392 16 9C16 9.64 15.87 10.26 15.64 10.82L18.57 13.75C20.07 12.5 21.27 10.86 22 9C20.27 4.61 16 1.5 11 1.5C9.6 1.5 8.26 1.75 7 2.2L9.17 4.35C9.74 4.13 10.35 4 11 4Z"
                    fill="black"
                  />
                </svg>
              )}
            </span>
          </label>
          <input
            type={showPassword ? "password" : "text"}
            id="password"
            value={password}
            className={style.inputForm}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Link href="/uploadImages" className={style.link}>
          <button
            onClick={handleLogin}
            className={style.button}
            style={{ backgroundColor: buttonColor, color: "#FFFFFF" }}
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginModal;
