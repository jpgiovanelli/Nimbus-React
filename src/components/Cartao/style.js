import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px black solid;
    min-width: 8em;

    p {
        text-align: center;
        color: red;
    }
`;

const Titulo = styled.h3`
    text-align: center;
    color: royalblue;
    font-weight: bolder;
`;

export {Container, Titulo}