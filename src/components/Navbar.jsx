import { navLinks } from "../constants";
import { github, menu, close, linkin } from "../assets";
import { Link } from "react-router-dom";
import { useState } from "react";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} bg-zinc-900 bg-opacity-95 w-full flex justify-between items-center fixed   z-20 `}
    >
      <div className="flex ">
        <Link
          to="https://github.com/YF91925352"
          className="flex items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={github} alt="github" className="w-9 h-9 object-contain" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/yifanzhengcn/"
          className="flex items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={linkin} alt="linkin" className="w-10 h-10 object-contain" />
        </Link>
      </div>

      <ul className="list-none hidden sm:flex gap-10 ">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`${
              active === link.title
                ? "text-white"
                : "bg-gradient-to-b from-sky-200  via-purple-100 to-pink-100 inline-block text-transparent bg-clip-text"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => {
              setActive(link.title);
            }}
          >
            {/* it needs to change to router and use navigate later */}
            <a href={`${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden ">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex items-center flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                }font-poppins text-[16px] font-medium cursor-pointer`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                {/* it needs to change to router and use navigate later */}
                <a href={`${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
