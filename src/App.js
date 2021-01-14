import { Box } from '@chakra-ui/react';
import './App.css';
import CardGallery from './cardGallery';
import Header from './header';

function App() {
  return (
    <Box className="App" bg="#282c34">
      <Header />
      <CardGallery />
    </Box>
  );
}

export default App;
