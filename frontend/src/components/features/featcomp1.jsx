import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const moreappData = [
    {
        id: 0,
        title: "Level processing",
        abriviation: "SL",
        description: ["Level as-built processor can be used for processing flat plane surface deviations", "Level as-builds are processed using uploaded dxf file that is exported from a total station. During processing, you will be required to enter a value of a design level. Then the application will compare the surveyed data point values against our entered value and produce an as-built which can be downloaded as a dxf file.", "..."]

    },
    {
        id: 1,
        title: "Single level position processing",
        abriviation: "SLP",
        description: ["Single level position as-built processor can be used for processing position deviations of elements where deviation values at one level are sufficient.", "Single level position survey is processed using two uploaded dxf format documents: design and survey. Once the documents are uploaded you will be asked to make some optional choices such as colour.", "..."]

    },
    {
        id: 2,
        title: "Multi level position processing",
        abriviation: "MLP",
        description: ["Multi level position as-built processor can be used for processing position deviations of elements where deviation values at one level are not sufficient.", "Similarly to Single level position processor Multi level position processor will require two documents in dxf format to be uploaded before processing can commence. Once the documents are uploaded you will be given some optional choices to choose from.", "..."]

    }
]


function AppFeaturesMore() {

    return (

        <section id="aboutmore" className='block more-block'>
            <Container fluid>
                <Row>
                    {moreappData.map(moreapps => {
                        return (
                            <Col md="4" key={moreapps.id} className='col-vert-g-10'>
                                <Card style={{ height: "100%"}}>
                                    <Card.Body>
                                        <Card.Title><div style={{ display: "inline-flex" }}>
                                            <div className='more-block namebadge'>{moreapps.abriviation}</div>
                                            <div className='more-block badgetitle title-holder' >{moreapps.title}</div>
                                        </div> </Card.Title>
                                        {moreapps.description.map((lisdescription, index) => {
                                            return (
                                                <Card.Text key={index}>{lisdescription}</Card.Text>
                                            )
                                        })}

                                        <Button variant="primary">Read more</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                        )
                    })}


                </Row>
            </Container>

        </section>
    )
}


export default AppFeaturesMore