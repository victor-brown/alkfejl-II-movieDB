import './App.css'
import { extendTheme, ChakraProvider, IconButton, Flex } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'


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
    <ChakraProvider theme={theme}>
      <div style={{}}>
        <div className='header' style={{display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", borderBottom: "1px solid grey"}}>
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
          Main content goes here.
        </div>
        <div style={{marginTop: "20px", paddingTop: "20px", borderTop: "1px solid grey"}}>
          <p style={{ textAlign: "center" }}>Online Movie Database - Team S - (SQL, NodeJS, React)</p>
        </div>
      </div>
    </ChakraProvider>
  )
}

export default App
