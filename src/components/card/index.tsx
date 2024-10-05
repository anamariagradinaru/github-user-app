import { Flex, Heading, Link, Text } from '@chakra-ui/react';
import Container from './index.styled';
import image from '../../assets/card-image.png';
import { FaMapMarkerAlt, FaPaperclip, FaTwitter, FaCity } from 'react-icons/fa';

interface Props {
    userInfo: {
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
    };
}

const Card = ({ userInfo }: Props) => {
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
                            {userInfo.username
                                ? userInfo.username
                                : 'Not Available'}
                        </Heading>
                        <Text color={'#697C9A'}>{userInfo.join}</Text>
                    </Flex>
                    <Flex direction={'column'} gap={'23px'}>
                        <Text fontSize={'24px'} color={'#0079FF'}>
                            {userInfo.email ? userInfo.email : 'Not Available'}
                        </Text>
                        <Text color={'var(--text-color)'}>{userInfo.bio}</Text>
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
                            Repos {userInfo.repos}
                        </Text>
                        <Heading
                            color={'var(--heading-color)'}
                            fontSize={'25px'}
                        >
                            {userInfo.followers}
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
                            {userInfo.following}
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
                            {userInfo.following}
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
                            <Text>
                                {userInfo.location
                                    ? userInfo.location
                                    : 'Not Available'}
                            </Text>
                        </Flex>
                        <Flex
                            alignItems={'center'}
                            gap={'10px'}
                            color={'var(--text-color)'}
                        >
                            <FaPaperclip />
                            <Link>
                                {userInfo.blog
                                    ? userInfo.blog
                                    : 'Not Available'}
                            </Link>
                        </Flex>
                    </Flex>
                    <Flex direction={'column'} gap={'30px'}>
                        <Flex
                            alignItems={'center'}
                            gap={'10px'}
                            color={'var(--text-color)'}
                        >
                            <FaTwitter />
                            <Text>
                                {userInfo.twitter
                                    ? userInfo.twitter
                                    : 'Not Available'}
                            </Text>
                        </Flex>
                        <Flex
                            alignItems={'center'}
                            gap={'10px'}
                            color={'var(--text-color)'}
                        >
                            <FaCity />
                            <Text>
                                {userInfo.company
                                    ? userInfo.company
                                    : 'Not Available'}
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Container>
    );
};

export default Card;
