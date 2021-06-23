import React from 'react'
import { Card } from 'react-bootstrap'

export default function MovieCard(props){
    return(
        <React.Fragment>
            <Card style={{ width: '18rem', marginRight: '20px'}} className="ml-4 mb-4">
                <Card.Body>
                    <Card.Title className="text-center">{ props.movie.title }</Card.Title>
                    <hr/>
                    <Card.Text>
                    <b>Realese Date:</b>
                    <br />
                    { props.movie.release_date }
                    </Card.Text>
                </Card.Body>
            </Card>
        </React.Fragment>
    )

}
