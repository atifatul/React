import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-amber-300 flex justify-between px-5 items-center">
      <figure className="font-extrabold text-2xl">Browser_Router</figure>
      <ul className="flex gap-5 font-semibold">
        <li className="p-4">
          < Link to="/">Home</Link>
        </li>
        <li className="p-4">
          <Link to="/About">About</Link>
        </li>
        <li className="p-4">
          <Link to="/careers">Carreers</Link>
        </li >
      </ul>
    </nav>
  );
}

export default Navbar;

// <a> tag baar baar uspe click kr rhe hai toh page refresh krke component ko render kr rha hai toh usko overcome krne ke liye <link> tag ka use krenge ar <link> tag href ki jagah "to" accept krta hai yeh <link> bina browser ko refresh kiye hue hi components ko render kr deta hai.
