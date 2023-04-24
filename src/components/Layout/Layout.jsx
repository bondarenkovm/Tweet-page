import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Container, List, Link } from './Layout.styled';

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
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
}
export default Layout;
