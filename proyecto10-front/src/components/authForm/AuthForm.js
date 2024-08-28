import "./authForm.css";
import AuthBar from '../menus/authbar/AuthBar';

const AuthForm = () => {
  const frame = document.createElement("div");
  frame.className = "frame";

  frame.append(AuthBar());

  return frame;
}

export default AuthForm;