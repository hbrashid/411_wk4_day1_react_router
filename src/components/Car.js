import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //
import { Container, Paper, Chip } from "@material-ui/core"

const Car = (props) => {
    const id = props.match.params.id
    const car = cars.find(car => car.id == id)
    return (
        <Container maxWidth="sm">
            <Paper>
                <h1>{car.Name}</h1>
                {Object.keys(car).map((key) => { return <Chip label={`${key}: ${car[key]}`}></Chip>
                })}

            </Paper>



        </Container>
    )
}

export default Car