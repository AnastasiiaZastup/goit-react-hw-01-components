import {FriendListItems, Status, NameObj} from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div>
            <FriendListItems>
                <Status $isOnline={isOnline}></Status>
                <img src={avatar} alt={name} width="48" height="48" />
                <NameObj>{name}</NameObj>
            </FriendListItems>
        </div>
    )
}