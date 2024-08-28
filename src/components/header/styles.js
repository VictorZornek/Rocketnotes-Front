import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;   // para que o cabeçalho fique fixo quando fizer a rolagem da tela

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;

    padding: 0 80px;

    background: red;
`