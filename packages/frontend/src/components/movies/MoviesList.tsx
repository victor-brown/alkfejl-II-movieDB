import { TableContainer, Table, Thead, TableCaption, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from 'axios'


function MoviesList() {

    const API = 'http://127.0.0.1:5555/movies'
    const [list, setList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API)
                setList(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, []);

    return (
        <TableContainer>
            <Table variant='striped' colorScheme='gray'>
                <TableCaption>Movies</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Id</Th>
                        <Th>Title</Th>
                        <Th>Year</Th>
                        <Th>Functions</Th>
                    </Tr>
                </Thead>
                <Tbody>

                    {list &&
                        list.map(({ id, title, year }) => (
                            <Tr key={id}>
                                <Td>{id}</Td>
                                <Td>{title}</Td>
                                <Td>{year}</Td>
                                <Td>
                                    <a href={`/movies/${id}`}>
                                        view
                                    </a>
                                </Td>
                            </Tr>
                        ))}

                </Tbody>
            </Table>
        </TableContainer>

    )
}

export default MoviesList