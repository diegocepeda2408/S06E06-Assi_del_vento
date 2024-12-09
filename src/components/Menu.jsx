import { cn } from "../utils"
import { IoMdCloseCircle } from "react-icons/io";

function Menu({ children, openMenu, closeMenu }) {
  return (
    <div className={cn('menu -top-full', openMenu && 'top-0')}>
      <button className="absolute top-2 right-5 p-1 md:hidden" onClick={closeMenu}>
        <IoMdCloseCircle className="size-6"/>
      </button>
      { children }  
    </div>
  )
}

export default Menu
