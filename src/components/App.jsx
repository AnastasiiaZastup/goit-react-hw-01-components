import {Profile} from "./profile/Profile"
import user from '../user.json'
import { Statistics } from "./statistics/Statistics"




export const App = () => {
  return (
    <div>
      <Profile user={user} /> 
      <Statistics data={data} />
    </div>

  );
};
