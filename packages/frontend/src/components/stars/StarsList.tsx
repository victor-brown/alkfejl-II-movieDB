import { TableContainer, Table, Thead, TableCaption, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from 'axios'


function StarsList() {

  const API = 'http://127.0.0.1:5555/stars'
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
            <Th>Title</Th>
            <Th>Star</Th>
            <Th>Functions</Th>
          </Tr>
        </Thead>
        <Tbody>

          {list &&
            list.map(({ id, name }) => (
              <Tr key={ id }>
                <Td>{id}</Td>
                <Td>{name}</Td>
                <Td>
                  <a href={`/stars/${id}`}>
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

export default StarsList