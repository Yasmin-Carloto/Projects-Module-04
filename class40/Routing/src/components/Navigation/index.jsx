import { Link } from "react-router-dom"

function Navigation() {
    return(
        <nav className="p-2 m-2 flex justify-around">
            <div>
                <Link className="text-lg" to="/">ThatsTheLogo</Link>
            </div>
            <ul className="flex gap-4">
                <li>
                    <Link className="hover:bg-violet-300 p-1 rounded-md" to="/">Home</Link>
                </li>
                <li>
                    <Link className="hover:bg-violet-300 p-1 rounded-md" to="/main">Main</Link>
                </li>
                <li>
                    <Link className="hover:bg-violet-300 p-1 rounded-md" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation