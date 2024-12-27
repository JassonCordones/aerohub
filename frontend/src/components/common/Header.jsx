import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-xl font-bold">
                    <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" width="200" height="60">
                        <rect width="200" height="50" fill="#1E3A8A" rx="10" />
                        <g transform="translate(20, 10) scale(0.8)">
                            <polygon points="20,0 25,15 40,20 25,25 20,40 15,25 0,20 15,15" fill="#FFD700" />
                            <rect x="15" y="18" width="10" height="4" fill="#1E3A8A" />
                        </g>
                        <text x="60" y="25" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#FFFFFF">
                            Aerohub
                        </text>
                        <text x="60" y="40" font-family="Arial, sans-serif" font-size="10" fill="#FFD700">
                            Your Flight Hub
                        </text>
                        </svg>
                    </Link>
                </h1>
                <nav>
                    <Link to="/profile" className="mx-2">Profile</Link>
                    <Link to="/admin" className="mx-2">Admin</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;