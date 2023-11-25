import { FirstProgramStyle, Avatars, Names, TagAndLoc, ListName, Lists } from './Profile.styled';

export const Profile = ({ user: { avatar, username, tag, location, stats: { followers, views, likes } } }) => {
  return (<FirstProgramStyle>
    <Avatars src={avatar} alt={username} width="65" height="65" />
    <Names>{username}</Names>
    <TagAndLoc>@{tag}</TagAndLoc>
    <TagAndLoc>{location}</TagAndLoc>
    <ListName>
      <Lists><span>Followers</span>
        <span>{followers}</span></Lists>
      <Lists><span>Views</span>
        <span>{views}</span></Lists>
      <Lists><span>Likes</span>
        <span>{likes}</span></Lists>
    </ListName>
  </FirstProgramStyle>);
};