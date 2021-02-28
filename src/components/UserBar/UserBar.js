import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { UserName, Avatar, Wrapper } from './StyledComponent';
import { getUser } from '../../redux/selectors/auth-selector';
import { logOut } from '../../redux/user/user-operations';

export default function UserBar() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const handlerLogOut = () => {
    dispatch(logOut);
  };
  return (
    <Wrapper>
      <UserName>Name</UserName>
      <Avatar src="" alt="" />
      <IconButton aria-label="delete" onClick={handlerLogOut}>
        <FontAwesomeIcon icon={faSignOutAlt} size="1x" color="#000000" />
      </IconButton>
    </Wrapper>
  );
}
