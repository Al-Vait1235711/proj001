import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"


function AppFooter(){
    return(
        <Container fluid>
            <div className="copyright" style={{textAlign:"left"}} >App Version 1.0</div>
            <Row style={{textAlign:"left"}}>
                <Col>
                <a href="#" className="copyright footer texta" style={{marginRight:"15px"}}>Terms of use</a>
                <a href="#" className="copyright footer texta" style={{marginRight:"15px"}}>Privacy policy</a>
                <a href="#" className="copyright footer texta">Contact us</a>
                </Col>
            </Row>
        
        
        <div className="copyright" style={{textAlign:"left"}} >&copy; 2025 Cubicx. All Rights Reserved</div>
        </Container>
    )
}

export default AppFooter