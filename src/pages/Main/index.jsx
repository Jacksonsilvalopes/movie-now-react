import React, { Component } from "react";
import { Container, Card, Row, Col, Button, Table } from 'react-bootstrap';

class index extends Component {
    state = {}
    render() {
        return (
            <>
                <Container style={{
                    paddingTop: 50,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minWidth: 300,
                }}>
                    <h1 style={{
                        color: '#fff', marginTop: 20,
                    }}>Movie Now</h1>
                    <Row style={{ display: 'flex', justifyContent: 'center' }}>
                        <Card style={{ width: 250, margin: 10 }}>
                            <Card.Img style={{ width: 210, height: 300, alignSelf: 'center', paddingTop: 20, cursor: 'pointer' }} variant="top" src="https://images.justwatch.com/poster/322874505/s718/temporada-1.jpg" />
                            <Card.Body style={{
                                display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
                            }}>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text style={{ fontSize: 12 }}>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button style={{ width: '100%'}} variant="outline-dark">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: 250, margin: 10 }}>
                            <Card.Img style={{ width: 210, height: 300, alignSelf: 'center', paddingTop: 20, cursor: 'pointer' }} variant="top" src="https://www.cineseries.com.br/images/stories/Fotos_de_posts/Prison_break_srie_completa.jpg" />
                            <Card.Body style={{
                                display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
                            }}>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text style={{ fontSize: 12 }}>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button style={{ width: '100%'}} variant="outline-dark">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </>
        );
    }
}

export default index;