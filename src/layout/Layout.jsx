import Footer from "../components/app/footer/Footer";
import { Header } from "../components/app/header/Header";

export default function Layout({ children }) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
