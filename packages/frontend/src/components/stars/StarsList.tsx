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
  const [people, setPeople] = useState([])
  const [listTotal, setListTotal] = useState<number | undefined>(undefined)

  const {
    currentPage,
    setCurrentPage,
    pageSize,
    pagesCount,
    pages
  } = usePagination({
    total: listTotal,
    initialState: { 
      currentPage: 1,
      pageSize: 10,
      isDisabled: false,
    },
  })

  useEffect (() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API)
        setList(response.data)
        setListTotal(response.data.count)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  useEffect (() => {
    setPeople(list.slice((currentPage - 1) * pageSize, currentPage * pageSize))
  }, [currentPage, list])

  const handlePageChange = (nextPage: number): void => {
    setCurrentPage(nextPage)
    console.log("request new data with ->", nextPage)
  };

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

            {people &&
              people.map(person =>
                <Tr key={person.id}>
                  <Td>{person.id}</Td>
                  <Td>{person.name}</Td>
                  <Td>{person.about}</Td>
                  <Td><a href="">edit</a> <a>delete</a></Td>
                </Tr>
              )}

          </Tbody>
        </Table>
      </TableContainer>




      <Pagination
        pagesCount={pagesCount}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        isDisabled={false}
      >
        <PaginationContainer
          align="center"
          justify="center"
          p={4}
        >
          <PaginationPrevious
                      isDisabled
                      onClick={() => console.warn("previous")}
                      >Previous</PaginationPrevious>
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