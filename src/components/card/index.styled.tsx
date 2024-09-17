import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
    width: 780px;
    height: 419px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(80, 80, 80, 0.2);
    .image img {
        width: 100px;
        height: 100px;
        border-radius: 50px;
    }
    .image {
        background-color: #4b6a9b;
        border-radius: 50%;
    }
`;
export default Container;
