import { useSelector, useDispatch } from 'react-redux';
import {
  selectUsers,
  // selectLoading,
  // selectError,
} from 'redux/selectors';
import { useEffect } from 'react';
import { fetchUsers, deleteContact } from 'redux/operations';

import {
  List,
  Item,
  BgLogo,
  BgImage,
  UserWrapper,
  UserBorder,
  UserAvatar,
  Text,
  Button,
} from './UsersList.styled';
import logo from '../../img/Logo.png';
import picture from '../../img/picture.png';
import hansel from '../../img/Hansel.png';

// import { ThreeDots } from 'react-loader-spinner';

function UsersList() {
  const users = useSelector(selectUsers);
  // const isLoading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // const delContact = id => {
  //   dispatch(deleteContact(id));
  // };

  return (
    <>
      {/* {isLoading && !error && (
        <ThreeDots
          height="40"
          width="40"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      )} */}
      {/* {isLoading && !error && <div>Loading...</div>} */}
      <List>
        {users.map(({ id, user, avatar, followers, tweets }) => {
          return (
            <Item key={id}>
              <BgLogo src={logo} alt="Logo GoIT" />
              <BgImage src={picture} alt="picture" />
              <UserWrapper>
                <UserBorder />
                <UserAvatar src={hansel} alt={user} />
              </UserWrapper>
              {/* <p>{user}</p>
              <p>{avatar}</p> */}
              <Text>{tweets} tweets</Text>
              <Text>{followers.toLocaleString('en-US')} Followers</Text>
              <Button type="button">Delete</Button>
            </Item>
          );
        })}
      </List>
    </>
  );
}

export { UsersList };
