
export const Header = () => {
    return (
        <header className="flex justify-between fixed top-0 left-0 w-full h-16  shadow-md z-50">
            <div className="flex  items-center w-50">
                <img src="/scroll.svg" alt="img" className="w-13"/>
                QLogs
            </div>
            <div className="flex items-center">
                <ul className="flex flex-row gap-5">
                    <li>
                        Accomplishments
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header