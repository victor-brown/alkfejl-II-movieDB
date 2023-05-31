import { Card } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function Genre() {

  const API = 'http://127.0.0.1:5555/genres/'
  const [genre, setGenre] = useState([])
  let param = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API + param.id)
        setGenre(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, []);

  return (
    <Card style={{ marginTop: "20px", gap: "5px", backgroundColor: "lightgrey" }}>
      <h1>{genre.name}</h1>
      <div style={{ display: "flex", padding: "20px", gap: "5px" }}>
        <p><b>Id:</b> {genre.id}</p>
      </div>
    </Card>
  )
}

export default Genre