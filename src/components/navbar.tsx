import { NavLink } from "react-router";

export function Navbar() {
  return (
    <nav className="flex h-12 items-center justify-center rounded bg-[rgba(0,0,5,0.5)] px-12 text-3xl text-white">
      <ul className="flex gap-3">
        <li className="hover:text-4xl hover:text-green-400">
          <NavLink to={"/"}>Dashboard</NavLink>
        </li>
        <li className="hover:text-4xl hover:text-green-400">
          <NavLink to={"/gehege"}>Gehege</NavLink>
        </li>
        <li className="hover:text-4xl hover:text-green-400">
          <NavLink to={"/personal"}>Personal</NavLink>
        </li>
        <li className="hover:text-4xl hover:text-green-400">
          <NavLink to={"/finanzen"}>Finanzen</NavLink>
        </li>
        <li className="hover:text-4xl hover:text-green-400">
          <NavLink to={"/verkaufsstaende"}>Verkaufsstände</NavLink>
        </li>
      </ul>
    </nav>
  );
}
