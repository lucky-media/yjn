import Head from "next/head";
import Footer from "../partials/Footer";
import Navigation from "../partials/Navigation";

export default function Layout({ children, title = "Young Journalist's Network" }) {
    return (
        <>
            <Head>
                <title>{title} - YJN</title>

                <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
            </Head>
            <div className="bg-gray-200 font-sans antialiased flex flex-col">
                <Navigation />

                {children}

                <Footer />
            </div>
        </>
    )
}
