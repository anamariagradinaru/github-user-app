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
                        <Heading fontSize={'39px'}>The Octocat</Heading>
                        <Text color={'#697C9A'}>Joined 25 Jan 2011</Text>
                    </Flex>
                    <Flex direction={'column'} gap={'23px'}>
                        <Text fontSize={'24px'} color={'#0079FF'}>
                            @octocat
                        </Text>
                        <Text color={'#4B6A9B'}>This profile has no bio</Text>
                    </Flex>
                </Flex>

                <Flex
                    gap={'40px'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    backgroundColor={' #f6f8ff'}
                    width={'480px'}
                    height={'85px'}
                    borderRadius={'15px'}
                >
                    <Flex direction={'column'}>
                        <Text fontSize={'18px'} color={'#4B6A9B'}>
                            Repos
                        </Text>
                        <Heading fontSize={'25px'}>8</Heading>
                    </Flex>
                    <Flex direction={'column'}>
                        <Text fontSize={'18px'} color={'#4B6A9B'}>
                            Followers
                        </Text>
                        <Heading fontSize={'25px'}>3938</Heading>
                    </Flex>
                    <Flex direction={'column'}>
                        <Text fontSize={'18px'} color={'#4B6A9B'}>
                            Following
                        </Text>
                        <Heading fontSize={'25px'}>8</Heading>
                    </Flex>
                </Flex>
                <Flex justifyContent={'space-between'} alignItems={'center'}>
                    <Flex direction={'column'} gap={'30px'}>
                        <Flex
                            alignItems={'center'}
                            gap={'10px'}
                            color={'#4B6A9B'}
                        >
                            <FaMapMarkerAlt />
                            <Text>San Francisco</Text>
                        </Flex>
                        <Flex
                            alignItems={'center'}
                            gap={'10px'}
                            color={'#4B6A9B'}
                        >
                            <FaPaperclip />
                            <Link>https://github.blog</Link>
                        </Flex>
                    </Flex>
                    <Flex direction={'column'} gap={'30px'}>
                        <Flex
                            alignItems={'center'}
                            gap={'10px'}
                            color={'#4B6A9B'}
                        >
                            <FaTwitter />
                            <Text>Not Available</Text>
                        </Flex>
                        <Flex
                            alignItems={'center'}
                            gap={'10px'}
                            color={'#4B6A9B'}
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
