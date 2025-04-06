import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="flex-container">
            <Link href ="/">Home</Link>
            <Link href ="/profile">Profile</Link>
            <Link href ="/about">About</Link>
        </nav>
    )
}