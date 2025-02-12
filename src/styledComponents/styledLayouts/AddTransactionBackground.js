import styled from 'styled-components'

export const AddTransactionBackground = styled.div`
    position: absolute;
    width: 345px;
    height: 530px;
    top: 52.5%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #09213A;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    font-family: "Roboto-Thin";
    color: white;

    border-radius: 5px;
    padding: 0 0 40px 0;
    box-sizing: border-box;

    @media screen and (max-width: 480px) {
        position: fixed;
        width: 65%;
        height: 60%;
        padding-bottom: 45px;
        box-shadow: none;
    }

    @media screen and (max-width: 400px) {
        width: 80%;
    }
`