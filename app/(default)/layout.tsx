import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Header />
      <main className="mt-nav-height">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
