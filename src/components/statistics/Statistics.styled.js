import styled from 'styled-components';

export const SecondProgramStyle = styled.div`
    border: 1px solid black;
    width: 398px;
    height: 200px;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: 10px auto 10px;
    border-radius: 10px;
    `;

export const ListForStatic = styled.ul`
    list-style: none;
    display: flex;
    width: 100%;
    padding: 0px;
`;

export const ListsLi = styled.li`
    flex-basis: calc(33.3333%);
    text-decoration: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    border: 1px solid black;
    margin-top: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #3498db;
    
`;