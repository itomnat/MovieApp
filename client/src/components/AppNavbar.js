import { useContext } from 'react';
import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import UserContext from '../UserContext';

export default function AppNavbar() {

	const { user } = useContext(UserContext);

	return(
		<Navbar bg="primary" expand="lg">
			<Container fluid >
			    <Navbar.Brand as={Link} to="/" className='text-white'>Zuitt Movie Lib</Navbar.Brand>
			    <Navbar.Toggle aria-controls="basic-navbar-nav" />
			    <Navbar.Collapse id="basic-navbar-nav">
				    <Nav className="ms-auto">
					{
						(user.id !== null) ? 
							user.isAdmin ?
								<>
									<Nav.Link as={Link} to="/movies" className="nav-items">Dashboard</Nav.Link>
									<Nav.Link as={Link} to="/logout" className="nav-items">Logout</Nav.Link>
								</>
							:
								<>
									<Nav.Link as={NavLink} to="/movies" className="nav-items">Movies</Nav.Link>
									<Nav.Link as={Link} to="/logout" className="nav-items">Logout</Nav.Link>
								</>
						:
							<>
								<Nav.Link as={NavLink} to="/movies" className="nav-items">Movies</Nav.Link>
								<Nav.Link as={Link} to="/login" className="nav-items">Login</Nav.Link>
								<Nav.Link as={Link} to="/register" className="nav-items">Register</Nav.Link>
							</>
					}
				    </Nav>
			    </Navbar.Collapse>
			</Container>
		</Navbar>
				
	);
}




