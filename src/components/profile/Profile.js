
export const Profile = ({ user: { avatar, username, tag, location, stats: { followers, views, likes } } }) => {
  return (<div>
    <img src={avatar} alt={username} width="30" height="30" />
    <p>{username}</p>
    <p>@{tag}</p>
    <p>{location}</p>
    <ul>
      <li><span>Followers</span>
        <span>{followers}</span></li>
      <li><span>Views</span>
        <span>{views}</span></li>
      <li><span>Likes</span>
        <span>{likes}</span></li>
    </ul>
  </div>);
};