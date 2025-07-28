import "./index.css";
import logo from "./assets/logo.png";
import AuthLayout from "./layouts/authLayout/AuthLayout";
import FormWrapper from "./components/formWrapper/FormWrapper.js";
import InputField from "./components/my_input/My_Input_Field.js";
import Button from "./components/button/Button.js";
import Height from "./components/height.js";
import AuthPage from "./pages/AuthPages.js";

function App() {
  return (
    <div className="App">
      <AuthPage/>
    </div>
  );
}

export default App;
