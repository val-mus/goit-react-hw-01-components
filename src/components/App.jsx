import { Container } from './Container/Container';
import { Profile } from './userProfile/userProfile';
import { Statistics } from './Statistics/statistics';
import user from '../Data/user.json';
import data from '../Data/data.json';

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
    </Container>
  );
};
