import Nav from '../nav';
import { LayoutContainer } from './style';

const Layout = ({ children }) => (
  <LayoutContainer className="flex column">
    <Nav />
    {children}
  </LayoutContainer>
)

export default Layout;
