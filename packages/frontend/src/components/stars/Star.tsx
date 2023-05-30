import { Card } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function Star() {

  const API = 'http://127.0.0.1:5555/stars/'
  const [star, setStar] = useState([])
  let param = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API + param.id)
        setStar(response.data)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, []);

  return (
    <Card style={{ marginTop: "20px", gap: "5px", backgroundColor: "lightgrey" }}>
      <h1>{ star.name }</h1>
      <p>Id: { star.id }</p>
      <p>About: { star.about }</p>
    </Card>
  )
}

export default Star