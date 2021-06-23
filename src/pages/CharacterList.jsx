import React, { useEffect } from 'react'
import { Card, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CharacterCard from '../components/CharacterCard'
import { getCharacters } from '../store/actions'

export default function CharacterList(){
    // const [people, setPeople] = useState([])
    const dispatch = useDispatch()
    const people = useSelector((state) => state.characters)

    useEffect(() => {
        dispatch(getCharacters())
    }, [dispatch]) 

    // useEffect(() => {
    //     fetch(`https://swapi.dev/api/people/`)
    //     .then(response => response.json())
    //     .then(data => setPeople(data.results))
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }, [])

     


    return(
        <React.Fragment>
            <h1 className="text-center mt-3">Character List</h1>
             {/* <p>{JSON.stringify(people)}</p> */}
            <Card>
                <Card.Body>
                    <Row>
                        {
                            people.map(person => {
                                return  (
                                    <CharacterCard
                                    person={person}
                                    key={person.name}
                                    />
                                )
                            })
                        }

                    </Row>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}