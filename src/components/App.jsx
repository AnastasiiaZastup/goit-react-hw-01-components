import {Profile} from "./profile/Profile"
import user from '../user.json'




export const App = () => {
  return (
    <div>
      <Profile user = {user}/> 
    </div>

  );
};
