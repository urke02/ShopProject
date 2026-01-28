import { NavLink } from "react-router-dom";

export default function GlobalNavBar() {
  
  const links = [
    {to: "/", label: "Shop"},
    {to: "/contact-us", label: "Contact"},
  ]
  
  
  return (
    <nav className="bg-purple-800 text-white p-1 flex justify-center">
      <ul className="flex gap-4 p-4">
        {links.map((l)=>(
          <li key={l.to}>
            <NavLink 
              to={l.to}
              className="hover:text-gray-300"
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

