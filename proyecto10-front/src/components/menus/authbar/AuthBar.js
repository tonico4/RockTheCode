import "./authBar.css";

const AuthBar = () => {
  const menu = document.createElement("nav");
  menu.className = "authBar";

  const links = document.createElement("ul");
  links.className = "links";
  menu.append(links);

  const login = document.createElement("li");
  const register = document.createElement("li");
  links.append(login, register);

  const signIn = document.createElement("a");
  signIn.className = "auth-btn active";
  signIn.textContent = "Sign In";
  signIn.addEventListener("click", () => toggleActive);

  const signUp = document.createElement("a");
  signUp.className = "auth-btn";
  signUp.textContent ="Sign Up";
  signUp.addEventListener("click", () => toggleActive);

  login.append(signIn);
  register.append(signUp);

  return menu;
}

const toggleActive = () => {
  const buttons = document.body.querySelectorAll(".auth-btn");
  console.log(buttons);
  
  for (const button of buttons) {
    button.classList.toggle("active");
  }
  console.log("Toggle active");
}

export default AuthBar;