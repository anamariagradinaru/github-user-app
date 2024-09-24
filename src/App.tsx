import { Button, Container, Flex, Heading } from '@chakra-ui/react';
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
            <Flex gap={'600px'} justifyContent={'center'} alignItems={'center'}>
                <Heading color={'var(--heading-color)'}>devfinder</Heading>
                <Button
                    cursor={'pointer'}
                    backgroundColor={'var(--card-color)'}
                    border={'none'}
                >
                    Light{' '}
                </Button>
            </Flex>

            <SearchBar />
            <Card />
        </Container>
    );
}

export default App;
