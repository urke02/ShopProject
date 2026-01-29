import { NavLink } from "react-router-dom";
import { NAVBAR_ITEMS } from "../../../shared/navbar-items";

export function Header() {
  return (
    <header>
      <nav className="bg-purple-800 text-white p-1 flex justify-center">
        <ul className="flex gap-4 p-4">
          {NAVBAR_ITEMS.map((link) => {
            if (link.submenu && link.submenu.length > 0) {
              return <SubMenuItem key={link.href} link={link} />;
            }

            return <LinkItem key={link.href} {...link} />;
          })}
        </ul>
      </nav>
    </header>
  );
}

// * RENDER LINK ITEM
function LinkItem({ href, label, children }) {
  return (
    <li className="relative group p-2 block">
      <NavLink to={href} className="hover:text-gray-300">
        {label}
      </NavLink>

      {children}
    </li>
  );
}

// * RENDER SUBMENU ITEM
function SubMenuItem({ link }) {
  return (
    <LinkItem {...link}>
      <ul className="absolute bg-purple-700 opacity-0 group-hover:opacity-100 w-40 p-2">
        {link.submenu.map((subLink) => {
          return <LinkItem key={subLink.href} {...subLink} />;
        })}
      </ul>
    </LinkItem>
  );
}

/*
import { NavLink } from "react-router-dom";

export default function NavBar() {
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
*/
