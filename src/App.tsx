import { Button, Container, Flex, Heading } from '@chakra-ui/react';
import './App.css';
import Card from './components/card';
import { useEffect, useState } from 'react';
import SearchBar from './components/search-bar';

function App() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    const [userInfo, setUserInfo] = useState({
        username: '',
        location: '',
        email: '',
        date: Date.now(),
        bio: '',
        repos: 0,
        followers: 0,
        following: 0,
        twitter: '',
        blog: '',
        company: '',
        join: '',
        image: '',
    });

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
            <SearchBar setUserInfo={setUserInfo} />
            <Card userInfo={userInfo} />
        </Container>
    );
}

export default App;
