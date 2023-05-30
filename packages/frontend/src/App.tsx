import './App.css'
import { extendTheme, ChakraProvider, IconButton } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import StarsList from './components/stars/StarsList'


const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

function App() {

  return (
    <ChakraProvider theme={theme}>xxxx
      <div>
        <div className='header' style={{display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid grey"}}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<HamburgerIcon />}
              variant='outline'
            />
            <MenuList>
              <MenuItem onClick={() => alert('Kagebunshin')}>Genres</MenuItem>
              <MenuItem onClick={() => alert('Kagebunshin')}>Stars</MenuItem>
              <MenuItem onClick={() => alert('Kagebunshin')}>Movies</MenuItem>
              <MenuItem onClick={() => alert('Kagebunshrrissn')}>Directors</MenuItem>
            </MenuList>
          </Menu>
          <h1>Online Movie Database</h1>
          <p>Alk Fejl II.</p>
        </div>
        <div className="container">
          
        <Router>
    <Routes>
        <Route path="/" element={<StarsList />} />
        <Route path="/stars" element={<StarsList />} />
        </Routes>
     </Router>

        </div>
        <div style={{marginTop: "20px", paddingTop: "20px", borderTop: "1px solid grey"}}>
          <p style={{ textAlign: "center" }}>Online Movie Database - Team S - (SQL, NodeJS, React)</p>
          <p><a href="https://github.com/victor-brown/alkfejl-II-movieDB/issues">https://github.com/victor-brown/alkfejl-II-movieDB/issues</a></p>
          <p><a href="https://trello.com/b/uFaGXWy4/open-movie-database">https://trello.com/b/uFaGXWy4/open-movie-database</a></p>
        </div>
      </div>
    </ChakraProvider>
  )
}

export default App
