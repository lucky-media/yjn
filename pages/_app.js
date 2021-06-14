import "../styles/globals.css";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="Young Journalists' Network"
        description="Democracy Lab’s “Young Journalists’ Network“ supported by the Media Mentorship Program of the US Embassy in Skopje, will build the capacities of young journalists in news gathering and reporting through a year-long series of professional trainings and internship opportunities."
        openGraph={{
          type: "website",
          locale: "en_EN",
          url: "https://yjn.demlab.org/",
          site_name: "Young Journalists' Network",
          description:
            "Democracy Lab’s “Young Journalists’ Network“ supported by the Media Mentorship Program of the US Embassy in Skopje, will build the capacities of young journalists in news gathering and reporting through a year-long series of professional trainings and internship opportunities.",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
