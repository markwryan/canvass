import {Component} from "react";
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {Link} from 'react-router-dom';

export default class AppNavbar extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {isOpen: false}
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return <div>
            <Navbar>
                <Nav>
                    <NavItem>
                        <NavLink tag={Link} to="/">Create</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/all">View</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>

    }
}