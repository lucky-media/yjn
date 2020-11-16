import Head from "next/head";
import Footer from "../partials/Footer";
import Navigation from "../partials/Navigation";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title} - Young Journalists' Network</title>

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin="true"
        />
      </Head>
      <div className="bg-gray-200 font-sans antialiased flex flex-col">
        <Navigation />

        {children}

        <Footer />
      </div>
    </>
  );
}
