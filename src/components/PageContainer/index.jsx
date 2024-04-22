
import Footer from "../Footer";
import Header from "../Header";


const PageContainer = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default PageContainer;
