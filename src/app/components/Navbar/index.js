import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="flex-container">
            <Link href ="/">Home</Link>
            <Link href ="/about">About</Link>
            <Link href ="/projects">Projects</Link>
            <Link href ="/contact">Contact</Link>
        </nav>
    )
}