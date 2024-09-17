import { Container, Heading } from '@chakra-ui/react';
import './App.css';
import SearchBar from './components/search-bar';
import Card from './components/card';

function App() {
    return (
        <Container
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            gap={'15px'}
        >
            <Heading>devfinder</Heading>
            <SearchBar />
            <Card />
        </Container>
    );
}

export default App;
