import { useDispatch, useSelector } from 'react-redux';
import { FcLinux } from 'react-icons/fc';
import s from './UserMenu.module.css';
import { getUserName } from 'redux/selectors';
import { logOut } from 'services/auth-operations';
import Button from 'react-bootstrap/esm/Button';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div className={s.container}>
      <FcLinux className={s.avatar} />
      <span className={s.name}>Welkom to Phonebook, {name}</span>
      <Button
        className={s.btn}
        variant="outline-danger"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;