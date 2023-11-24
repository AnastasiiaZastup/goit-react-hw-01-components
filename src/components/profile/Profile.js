
export const Profile = ( { avatar, username, tag, location, stats1, stats2, stats3 }) => {
  return (<div>
    <img src={avatar} alt={username} width="30" height="30" />
    <p>{username}</p>
    <p>@{tag}</p>
    <p>{location}</p>
    <ul>
      <li><span>Followers</span>
        <span>{stats1}</span></li>
      <li><span>Views</span>
        <span>{stats2}</span></li>
      <li><span>Likes</span>
        <span>{stats3}</span></li>
    </ul>
  </div>);
};