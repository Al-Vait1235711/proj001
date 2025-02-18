import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const aboutDataL = [
  {
    id: 0,
    title: "As-built processing for everyone",
    image: "",
    description: ["Automated as-built processing service saves valuable time for your project and your staff.", "It assists site engineers and as-built engineers to process as-built surveys in a matter of seconds. The main goal of the service is to free valuable time so that it can be used for doing other tasks, like QA documentation, RFIs, ITPs etc."]
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



function AppAbout() {

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
                    <Card.Text>{aboutapp.description[1]}</Card.Text>
                    <div className='btn-gap'>
                    <Button href='/features' variant="btn btn-primary">See features</Button>
                    <Button variant="btn btn-secondary">Read the docs</Button>
                    </div>
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

export default AppAbout