import './App.css'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'


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
    <div className='container'>
      <div className='header'>
      <nav className='menu'>
      </nav>
      <h1>Online Movie Database - AlkFejl II</h1>
      </div>
      <div className="container">
        Main content goes here.
      </div>
      <div className='footer'>
        <p>
        Online Movie Database AlKFejl II
        </p>
      </div>
    </div>
    </ChakraProvider>    
  )
}

export default App
