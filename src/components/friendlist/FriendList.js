import { FriendListItem } from "./FriendListItem";
import {ListStyleFriend} from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <ListStyleFriend>
            {friends.map(friend => {
                return (
                    <FriendListItem
                        key={friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                )
            })}
        </ListStyleFriend>
    )
};