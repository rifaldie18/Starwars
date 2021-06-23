import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function CharacterCard(props){
    const history = useHistory()

    function seeMore(url){
        const id = url.slice(29, 30)
        history.push(`/character/${id}`)
    }
    return(
        <React.Fragment>
            <Card style={{ width: '18rem', marginRight: '20px'}} className="ml-4 mb-4">
                <Card.Body>
                    <Card.Title>
                        { props.person.name }
                    </Card.Title>
                    <hr/>
                    <Card.Text>
                    <b>Birth Year:</b> 
                    &nbsp; 
                    { props.person.birth_year }
                    <br />
                    <b>Eye Color:</b> 
                    &nbsp; 
                    { props.person.eye_color }
                    <br />
                    </Card.Text>
                    <Button variant="primary" className="ml-1" onClick={() => seeMore(props.person.url)}>See More</Button>
                </Card.Body>
            </Card>
        </React.Fragment>
    )

}