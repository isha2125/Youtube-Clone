import {Container, FormControl, InputGroup, Nav, Navbar,Button} from "react-bootstrap";
import MenuIcon from '@mui/icons-material/Menu';



const Customappbar = ({isSearchVisible = false ,onSearch}) => {
    return ( 
        
            <Navbar bg="dark" sticky="top" expand="lg">
            <MenuIcon/>
                <Container fluid>
                
                  <Navbar.Brand>
                     <img src="../logo.svg" alt="logo" height={100} />
                  </Navbar.Brand>
                    
                        {isSearchVisible ? <Nav>
                            <InputGroup>
                            <FormControl placeholder="search" onChange={onSearch} aria-label="search"/>
                            <Button variant="danger" type="submit" >
                                Search
                            </Button>
                            <Button variant ="outline-light" href="/License">
                                License
                            </Button>
                            </InputGroup>
                        </Nav> : <div></div>}

                    
                </Container>
            </Navbar>
        
     );
}
 
export default Customappbar;