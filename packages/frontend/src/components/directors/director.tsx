import { Card } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function Director() {

    const API = 'http://127.0.0.1:5555/director/'
    const [director, setDirector] = useState([])
    let param = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API + param.id)
                setDirector(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, []);

    return (
        <Card style={{ marginTop: "20px", gap: "5px", backgroundColor: "lightgrey" }}>
            <h1>{director.name}</h1>
            <div>
                <p><b>Id:</b> {director.id}</p>
                <p><b>About:</b> {director.about}</p>
            </div>
        </Card>
    )
}

export default Director