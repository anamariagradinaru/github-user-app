import { Button, Flex } from '@chakra-ui/react';
import Container from './index.styled';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    return (
        <Container>
            <Flex
                alignItems={'center'}
                justifyContent={'space-between'}
                gap={'20px'}
            >
                <FaSearch color="#0079FF" />
                <input
                    type="search"
                    placeholder="Search GitHub username…"
                ></input>
            </Flex>

            <Button
                border={'1px solid #0079FF'}
                borderRadius={'10px'}
                width={'100px'}
                height={'50px'}
                color={'white'}
                backgroundColor={'#0079FF'}
            >
                Search
            </Button>
        </Container>
    );
};
export default SearchBar;
