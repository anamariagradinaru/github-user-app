import styled from 'styled-components';

const Container = styled.div`
    background-color: var(--card-color);
    width: 780px;
    height: 69px;
    gap: 10px;
    box-shadow: var(--outline);
    border-radius: 10px;
    input {
        width: 600px;
        height: 59px;
        background-color: var(--card-color);
        border: #fff;
        outline: none;
        padding: 20px;
    }

    display: flex;
    justify-content: center;
    align-items: center;
`;
export default Container;
