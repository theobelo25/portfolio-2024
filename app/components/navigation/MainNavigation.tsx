import { NavLink } from "@remix-run/react"

export default function MainNavigation() {
    return (
        <nav id="main-navigation" aria-label="Main navigation">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    )
}