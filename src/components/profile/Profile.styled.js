import styled from 'styled-components';

export const FirstProgramStyle = styled.div`
    border: 1px solid black;
    width: 300px;
    height: 350px;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: 10px auto 10px;
    border-radius: 10px;
    
`;

export const Avatars = styled.img` 
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
`;

export const Names = styled.h1`
    font-size: 25px;
`;

export const TagAndLoc = styled.p`
    font-size: 15px;
    
`;

export const ListName = styled.ul`
    list-style: none;
    display: flex;
    width: 100%;
    padding: 0px;
    
`;

export const Lists = styled.li`
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
    
`;