import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

export default function CharacterDetail(){
    const { id } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
        .then(response => response.json())
        .then(data => setCharacter(data))
        .catch(err => {
            console.log(err)
        })
    }, [id])

    return(
        <React.Fragment>
            <Container className="mt-5 shadow p-4">
                <Row>
                    <Col >
                        <h2 className="text-center mb-4">{ character.name }</h2>
                        <div style={{ paddingLeft: "20%" }}>
                            <Row>
                                <Col>
                                    <h5>Height:</h5> 
                                </Col>
                                <Col style={{ paddingRight: "20%"}}>
                                    <p>{ character.height } cm</p> 
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5>Mass:</h5>
                                </Col>
                                <Col style={{ paddingRight: "20%"}}>
                                    <p>{ character.mass } kg</p> 
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5>Hair Color:</h5>
                                </Col>
                                <Col style={{ paddingRight: "20%"}}>
                                    <p>{ character.hair_color }</p> 
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5>Skin Color:</h5>
                                </Col>
                                <Col style={{ paddingRight: "20%"}}>
                                    <p>{ character.skin_color }</p> 
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5>Eye Color:</h5>
                                </Col>
                                <Col style={{ paddingRight: "20%"}}>
                                    <p>{ character.eye_color }</p> 
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5>Gender:</h5>
                                </Col>
                                <Col style={{ paddingRight: "20%"}}>
                                    <p>{ character.gender }</p> 
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                     <h5>Birth Year:</h5>
                                </Col>
                                <Col style={{ paddingRight: "20%"}}>
                                    <p>{ character.birth_year }</p> 
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
