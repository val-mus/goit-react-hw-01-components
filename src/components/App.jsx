import { Container } from './Container/Container';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/statistics';
import { FriendList } from './FriendList/FriendLIst';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from '../Data/user.json';
import data from '../Data/data.json';
import friends from '../Data/friends.json';
import transactions from '../Data/transactions.json';

export const App = () => {
  return (
    <Container>
      
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="upload stats" stats={data}></Statistics>

      <FriendList friends={friends}></FriendList>

      <TransactionHistory items={transactions}></TransactionHistory>

    </Container>
  );
};
