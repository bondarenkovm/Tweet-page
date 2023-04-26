import { UsersList } from 'components/UsersList';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { TiArrowLeftThick } from 'react-icons/ti';
import { Links } from './Tweets.styled';

function Tweets() {
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  return (
    <>
      <Links to={backLink.current}>
        <TiArrowLeftThick />
        Go back
      </Links>
      <UsersList />
    </>
  );
}

export default Tweets;
