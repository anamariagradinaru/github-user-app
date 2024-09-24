import { Flex, Heading, Link, Text } from '@chakra-ui/react';
import Container from './index.styled';
import image from '../../assets/card-image.png';
import { FaMapMarkerAlt, FaPaperclip, FaTwitter, FaCity } from 'react-icons/fa';

const Card = () => {
    return (
        <Container>
            <Flex className="image" marginTop={'30px'}>
                <img src={image} alt="je" />
            </Flex>
            <Flex direction={'column'} gap={'20px'} marginTop={'30px'}>
                <Flex direction={'column'}>
                    <Flex
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >
                        <Heading
                            fontSize={'39px'}
                            color={'var(--heading-color)'}
                        >
                            The Octocat
                        </Heading>
                        <Text color={'#697C9A'}>Joined 25 Jan 2011</Text>
                    </Flex>
                    <Flex direction={'column'} gap={'23px'}>
                        <Text fontSize={'24px'} color={'#0079FF'}>
                            @octocat
                        </Text>
                        <Text color={'var(--text-color)'}>
                            This profile has no bio
                        </Text>
                    </Flex>
                </Flex>

                <Flex
                    gap={'40px'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    backgroundColor={' var(--background-color)'}
                    width={'480px'}
                    height={'85px'}
                    borderRadius={'15px'}
                >
                    <Flex direction={'column'}>
                        <Text fontSize={'18px'} color={'var(--text-color)'}>
                            Repos
                        </Text>
                        <Heading
                            color={'var(--heading-color)'}
                            fontSize={'25px'}
                        >
                            8
                        </Heading>
                    </Flex>
                    <Flex direction={'column'}>
                        <Text fontSize={'18px'} color={'var(--text-color)'}>
                            Followers
                        </Text>
                        <Heading
                            color={'var(--heading-color)'}
                            fontSize={'25px'}
                        >
                            3938
                        </Heading>
                    </Flex>
                    <Flex direction={'column'}>
                        <Text fontSize={'18px'} color={'var(--text-color)'}>
                            Following
                        </Text>
                        <Heading
                            color={'var(--heading-color)'}
                            fontSize={'25px'}
                        >
                            8
                        </Heading>
                    </Flex>
                </Flex>
                <Flex justifyContent={'space-between'} alignItems={'center'}>
                    <Flex direction={'column'} gap={'30px'}>
                        <Flex
                            alignItems={'center'}
                            gap={'10px'}
                            color={'var(--text-color)'}
                        >
                            <FaMapMarkerAlt />
                            <Text>San Francisco</Text>
                        </Flex>
                        <Flex
                            alignItems={'center'}
                            gap={'10px'}
                            color={'var(--text-color)'}
                        >
                            <FaPaperclip />
                            <Link>https://github.blog</Link>
                        </Flex>
                    </Flex>
                    <Flex direction={'column'} gap={'30px'}>
                        <Flex
                            alignItems={'center'}
                            gap={'10px'}
                            color={'var(--text-color)'}
                        >
                            <FaTwitter />
                            <Text>Not Available</Text>
                        </Flex>
                        <Flex
                            alignItems={'center'}
                            gap={'10px'}
                            color={'var(--text-color)'}
                        >
                            <FaCity />
                            <Text>agithub</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Container>
    );
};

export default Card;
