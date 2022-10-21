import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
