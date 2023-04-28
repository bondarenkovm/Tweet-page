import { useSelector, useDispatch } from 'react-redux';
import {
  selectUsers,
  selectFollowing,
  selectLoading,
  selectError,
} from 'redux/selectors';
import { useEffect, useState } from 'react';
import { fetchUsers, changeNumberFollowers } from 'redux/operations';

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
  LoadButton,
} from './UsersList.styled';
import logo from '../../img/Logo.png';

import { addFollowing, removeFollowing } from 'redux/followingSlice';

import { TailSpin } from 'react-loader-spinner';

function UsersList() {
  const dispatch = useDispatch();

  const users = useSelector(selectUsers);
  const following = useSelector(selectFollowing);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [perPage, setPerPage] = useState(3);
  const pageUsers = users.slice(0, perPage);

  function loadMore() {
    setPerPage(perPage + 3);
  }

  const сlickFollowBtn = ({ id, followers }) => {
    const activeFollower = following.includes(id);

    if (activeFollower) {
      dispatch(removeFollowing(id));
      dispatch(changeNumberFollowers({ id, followers: followers - 1 }));
    }
    if (!activeFollower) {
      dispatch(addFollowing(id));
      dispatch(changeNumberFollowers({ id, followers: followers + 1 }));
    }
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && (
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass="loader"
          visible={true}
        />
      )}
      <List>
        {pageUsers.map(({ id, user, avatar, followers, tweets }) => {
          return (
            <Item key={id}>
              <BgLogo src={logo} alt="Logo GoIT" />
              <BgImage />
              <UserWrapper>
                <UserBorder />
                <UserAvatar src={avatar} alt={user} />
              </UserWrapper>
              <Text>{tweets} tweets</Text>
              <Text>{followers.toLocaleString('en-US')} Followers</Text>
              <Button
                active={following.includes(id)}
                type="button"
                onClick={() => {
                  сlickFollowBtn({ id, followers });
                }}
              >
                {following.includes(id) ? 'Following' : 'Follow'}
              </Button>
            </Item>
          );
        })}
      </List>
      {pageUsers.length < users.length && (
        <LoadButton type="button" onClick={loadMore}>
          Load More
        </LoadButton>
      )}
    </>
  );
}

export { UsersList };
