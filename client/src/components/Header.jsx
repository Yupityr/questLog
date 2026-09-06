import { NavLink } from "react-router-dom";

export const Header = () => {

    return (
        <header className="flex justify-between fixed top-0 left-0 w-full h-16  shadow-md z-50">
            <NavLink className="flex  items-center w-50" to="/">
                <img src="/scroll.svg" alt="img" className="w-13"/>
                QLogs
            </NavLink>
            <div className="flex items-center mr-3">
                <ul className="flex flex-row gap-5">
                    <li>
                        <NavLink to="/quest">
                            Accomplishments
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header