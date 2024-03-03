import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
