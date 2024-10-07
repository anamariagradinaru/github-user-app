import { Button, Flex } from '@chakra-ui/react';
import Container from './index.styled';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

interface Props {
    setUserInfo: React.Dispatch<
        React.SetStateAction<{
            username: string;
            location: string;
            email: string;
            date: number;
            bio: string;
            repos: number;
            followers: number;
            following: number;
            twitter: string;
            blog: string;
            company: string;
            join: string;
            image: string;
        }>
    >;
}
const SearchBar = ({ setUserInfo }: Props) => {
    const [searchUsername, setSearchUsername] = useState('');

    async function onSearch(username: string) {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const body = await res.json();

        const userInfo = {
            username: body.name,
            location: body.location,
            email: body.email,
            date: body.date,
            bio: body.bio,
            repos: body.repos,
            followers: body.followers,
            following: body.following,
            twitter: body.twitter,
            blog: body.blog,
            company: body.company,
            join: body.created_at,
            image: body.avatar_url,
        };
        setUserInfo(userInfo);
    }

    return (
        <Container>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <form>
                    <FaSearch color="#0079FF" />
                    <input
                        onChange={(event) => {
                            setSearchUsername(event.target.value);
                        }}
                        placeholder="Search GitHub username…"
                    ></input>

                    <Button
                        onClick={() => onSearch(searchUsername)}
                        type="button"
                        border={'1px solid #0079FF'}
                        borderRadius={'10px'}
                        width={'100px'}
                        height={'50px'}
                        color={'white'}
                        backgroundColor={'#0079FF'}
                        cursor={'pointer'}
                    >
                        Search
                    </Button>
                </form>
            </Flex>
        </Container>
    );
};
export default SearchBar;
