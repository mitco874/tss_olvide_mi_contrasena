import { Link } from "react-router-dom"
import "./Footer.css"
export const Footer = () => {
  return (
    <footer className="d-flex flex-column bg-dark h-100">
        <Link className="text-white" to="/">Terms of Use</Link>
        <Link className="text-white" to="/">Support</Link>
        <Link className="text-white" to="/">Contact Us</Link>
        <Link className="text-white" to="/">Marketing Website</Link>
    </footer>
  )
}
