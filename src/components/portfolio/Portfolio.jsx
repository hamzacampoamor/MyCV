import { Container, Row, Col,Navbar,NavItem } from 'reactstrap';
import "./protfolio.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
export default function Portfolio() {
    return (
        <div className="portfolio"id="portfolio">
            <div className="container">
                <div className="row">
                    <h1>Portfolio</h1>
                </div>
                <div className="row">
                    <ul>
                <li >Featured</li>
                <li>Web App</li>
                <li>Desing</li>
                <li>Branding</li>
            </ul>
                </div>
            </div>
            
            
             <div className="container">
                <div className="item">
                    <img src="./assets/Movie app.PNG" alt="" />
                    <h3>Movies App</h3>
                </div>
            </div>
        </div>
    )
}
