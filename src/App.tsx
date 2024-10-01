import { Button, Container, Flex, Heading } from '@chakra-ui/react';
import './App.css';
import SearchBar from './components/search-bar';
import Card from './components/card';
import { useEffect, useState } from 'react';

function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);
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
                    onClick={toggleTheme}
                    cursor={'pointer'}
                    backgroundColor={'var(--card-color)'}
                    border={'none'}
                >
                    {theme === 'light' ? 'Light' : 'Dark'} Theme
                </Button>
            </Flex>

            <SearchBar />
            <Card />
        </Container>
    );
}

export default App;
