import { Card } from '@chakra-ui/react'
import{ useEffect, useState } from 'react'
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
      <h1>{ movie.title }</h1>
      <p>Id: { movie.id }</p>
      <p>Year: { movie.year }</p>
    </Card>
  )
}

export default Movie