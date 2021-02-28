import { useSelector } from 'react-redux';
import Container from '../Container';
import Logo from '../Logo';
import { Header } from './StyledComponent';
import UserBar from '../UserBar';

import { getIsLoggedIn } from '../../redux/selectors/auth-selector';

export default function AppBar() {
  //  const isLoggedIn= useSelector(getIsLoggedIn)
  const isLoggedIn = true;

  return (
    <Header>
      {isLoggedIn && (
        <Container>
          <Logo />
          <UserBar />
        </Container>
      )}
    </Header>
  );
}
