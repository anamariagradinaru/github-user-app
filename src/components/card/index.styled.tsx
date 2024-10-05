import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
    width: 780px;
    height: 419px;
    background-color: var(--card-color);
    border-radius: 10px;
    box-shadow: var(--outline);
    .image img {
        width: 100px;
        height: 100px;
        border-radius: 50px;
    }
    .image {
        background-color: var(--text-color);
        border-radius: 50%;
    }
    /* input {
        width: 600px;
        height: 59px;
        background-color: var(--card-color);
        border: #fff;
        outline: none;
    } */
`;
export default Container;
