import { NavLink } from "react-router-dom";

export default function GlobalNavBar() {
  
  const links = [
    {to: "/", label: "Shop"},
    {to: "/contact", label: "Contact"},
    {to: "/about", label: "About"},
  ]
  
  return (
    <nav className="bg-purple-800 text-white p-1 flex justify-center">
      <ul className = "flex gap-4 p-4">
        {links.map((l)=>(
          <li key={l.to}>
            <NavLink 
              to={l.to}
              className={({isActive})=>
                isActive ? "text-gray-300 font-bold" : "hover:text-gray-600"
              }
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>    
  )
}
