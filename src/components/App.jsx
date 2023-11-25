import {Profile} from "./profile/Profile"
import user from '../user.json'
import { Statistics } from "./statistics/Statistics"
import data from '../data.json'
import friends from '../friends.json'
import { FriendList } from "./friendlist/FriendList"
import transactions from '../transactions.json'
import {TransactionHistory} from "./transaction/TransactionHistory"






export const App = () => {
  return (
    <div>
      <Profile user={user} /> 
      <Statistics data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
      
    </div>

  );
};
