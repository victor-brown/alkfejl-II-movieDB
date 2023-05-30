import { Card } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


function StarsList() {

    const API = 'http://127.0.0.1:5555/stars'
    const [list, setList] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(API)
            setList(response.data)
            console.log(response)
          } catch (error) {
            console.log(error)
          }
        }
    
        fetchData()
      }, []);

    return (
            <Card>
            
            <//Card>
)
}

export default StarsList