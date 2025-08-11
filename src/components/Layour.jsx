// src/components/Layout.jsx

import AnnouncementBar from "./common/AnnouncementBar";
import Footer from "./common/Footer";
import Header from "./common/Header";

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-white">
    <AnnouncementBar />
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

export default Layout;
