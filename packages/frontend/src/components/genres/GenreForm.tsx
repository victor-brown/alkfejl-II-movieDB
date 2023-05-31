import { Card, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function GenreForm() {

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
    <Card style={{ padding: "10px", backgroundColor: "aqua" }}>
    
    <FormControl>
    <FormLabel>Genre name</FormLabel>
        <Input type='text' />
        <FormHelperText>Name of the genre.</FormHelperText>
    </FormControl>
    </Card>
  )
}

export default GenreForm