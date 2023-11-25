import styled from 'styled-components';

export const ListStyleFriend = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0px;
    border: 1px solid black;
    width: 350px;
    height: 445px;
    text-align: center;
    margin: 10px auto 10px;
    border-radius: 10px;
`;

export const FriendListItems = styled.li`
    display: flex;
    gap: 10px;
    text-align: center;
    border: 1px solid black;
    margin: 10px auto 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 290px;
    border-radius: 10px;
    gap: 25px;
`;

export const Status = styled.span`
    width: 20px;
    height:20px;
    border-radius: 100%;
    margin-top: 16px;
    margin-left: 60px;
    display: flex;
    text-align: center;
    background-color: ${props => {
    return props.$isOnline ? 'green' : 'red';
  }};`;

export const NameObj = styled.p`
    font-size: 18px;
    
`;