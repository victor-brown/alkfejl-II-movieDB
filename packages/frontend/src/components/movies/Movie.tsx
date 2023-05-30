import { Card } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function Movie() {

    const API = 'http://127.0.0.1:5555/movies/'
    const [movie, setMovie] = useState([])
    let param = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API + param.id)
                setMovie(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, []);

    return (
        <Card style={{ marginTop: "20px", gap: "5px", backgroundColor: "lightgrey" }}>
            <h1>{movie.title}</h1>
            <div style={{ display: "flex", padding: "20px", gap: "5px" }}>
                <p><b>Image:</b> <img src={`${movie.image_url}`} /> </p>
                <div>
                    <p><b>Id:</b> {movie.id}</p>
                    <p><b>Year:</b> {movie.year}</p>
                    <p><b>Description:</b> {movie.description}</p>
                    <p><b>IMDB rating:</b> {movie.imdb_rating}</p>
                    <p><b>Runtime:</b> {movie.runtime}</p>
                    <p><b>Certificate:</b> {movie.certificate}</p>
                </div>
            </div>
        </Card>
    )
}

export default Movie