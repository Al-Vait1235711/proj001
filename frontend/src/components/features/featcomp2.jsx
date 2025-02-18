import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const aboutDataL = [
  {
    id: 0,
    title: "Try it free!",
    image: "",
    description: ["No registration is needed.", "**Some limitations may apply while using the free version. All uploaded and processed documents will be permanently deleted once navigated outside the page."]
  }
]
const aboutDataR = [
  {
    id: 0,
    title: "Title on Right",
    image: "",
    description: "Add 3D rendering module that plays around with a drawing in a model space."
  }
]



function AppDemo() {

  return (
    <div>
    <section id='brief' className='block brief-block'>
      <Container fluid>
        <Row>
          <Col md={6} className='col-vert-g-10'>
            {aboutDataL.map(aboutapp => {
              return (
                <Card key={aboutapp.id}>
                  {/* <Card.Img variant="top" src={aboutapp.image} /> */}
                  <Card.Body>
                    <Card.Title className='title-holder'>{aboutapp.title}</Card.Title>
                    <Card.Text>{aboutapp.description[0]}</Card.Text>
                    <div className='btn-gap' style={{marginBottom:"10px"}}>
                    <Button href='/features' variant="btn btn-primary">Try it free!</Button>
                    </div>
                    <Card.Text>{aboutapp.description[1]}</Card.Text>
                  </Card.Body>
                </Card>
              )
            })}
          </Col>
          <Col md={6} className='col-vert-g-10'>
            {aboutDataR.map(aboutapp => {
              return (
                <Card key={aboutapp.id} className='brief-block right_block'>
                  {/* <Card.Img variant="top" src={aboutapp.image} /> */}
                  <Card.Body> 
                    <Card.Title>{aboutapp.title}</Card.Title>
                    <Card.Text>{aboutapp.description}</Card.Text>
                  </Card.Body>
                </Card>
              )
            })}
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default AppDemo