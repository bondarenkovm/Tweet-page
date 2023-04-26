import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Container, List, Link } from './Layout.styled';
import { TailSpin } from 'react-loader-spinner';

function Layout() {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <List>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/tweets">Tweets</Link>
              </li>
            </List>
          </nav>
        </Container>
      </Header>
      <main>
        <Container>
          <Suspense
            fallback={
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
            }
          >
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
}
export default Layout;
