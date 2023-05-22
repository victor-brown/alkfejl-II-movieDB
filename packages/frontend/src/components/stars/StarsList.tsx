import { TableContainer, Table, Thead, TableCaption, Tr, Th, Tbody, Td, ChakraProvider } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {
    Pagination,
    usePagination,
    PaginationPage,
    PaginationNext,
    PaginationPrevious,
    PaginationPageGroup,
    PaginationContainer,
  } from "@ajna/pagination"

function StarsList() {

    const API = 'http://127.0.0.1:5555/stars'
    const [list, setList] = useState([])
    

    const {
        currentPage,
        setCurrentPage,
        pagesCount,
        pages
      } = usePagination({
        pagesCount: 12,
        initialState: { currentPage: 1 },
      })



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
        <ChakraProvider>
        <TableContainer>
        <Table variant='striped' colorScheme='gray'>
          <TableCaption>Movies</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>About</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>

            {list &&
                list.map(({ id, name, about }) => (
                    <Tr>
                        <Td>{ id }</Td>
                        <Td>{ name }</Td>
                        <Td>{ about }</Td>
                        <Td><a href="">edit</a> <a>delete</a></Td>
                    </Tr>
                ))}

          </Tbody>
        </Table>
      </TableContainer>




      <Pagination
        pagesCount={pagesCount}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      >
        <PaginationContainer>
          <PaginationPrevious>Previous</PaginationPrevious>
          <PaginationPageGroup>
            {pages.map((page: number) => (
              <PaginationPage 
                key={`pagination_page_${page}`} 
                page={page} 
              />
            ))}
          </PaginationPageGroup>
          <PaginationNext>Next</PaginationNext>
        </PaginationContainer>
      </Pagination>


</ChakraProvider>

    )            
}

export default StarsList