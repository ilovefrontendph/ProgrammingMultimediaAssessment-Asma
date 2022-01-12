import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function App() {
  return (
    <div className="w-full flex flex-row justify-between border-b-[2px] px-[4px] md:px-[10px]">
      <Link to="/landing">
        <img src={logo} />
      </Link>

      <div className="self-center text-[14px] md:text-[25px] space-y-[20px] space-x-[30px] ">
        <Link to="/landing">Landing</Link>
        <Link to="/services">Services Offered</Link>

        <Link to="/contact">Contact Information</Link>
        <Link to="/stack">Technology Stack</Link>
        <Link to="/form">Form</Link>
        <Link to="/LTO-ADL-Form21">LTO-ADL-Form21</Link>

        <Link to="/login">Login</Link>
        {/* {cookies.get("user") ? (
          <button onClick={cookies.remove("user")}>Login</button>
        ) : (
          <Link to="/login">Login</Link>
        )} */}
      </div>
    </div>
  );
}

export default App;
