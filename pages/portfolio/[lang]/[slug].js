import { slugify, parseData, getCollection } from "../../../content/content";
import Layout from "../../../components/layout/Layout";
import ReactMarkdown from "react-markdown";
import YellowNews from "../../../components/YellowNews";
import Disclaimer from "../../../components/Disclaimer";
import AuthorSection from "../../../components/AuthorSection";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import useUrl from "../../../utils/useUrl";

export default function porfolioIndex({ content, data, authors }) {
  const { title, cover, date, published } = data;
  const router = useRouter();
  const url = useUrl();

  let lang = router.query.lang === "mk" ? "al" : "mk";

  return (
    <>
      <NextSeo
        title={`${title} - Young Journalists' Network`}
        openGraph={{
          title: `${title} - Young Journalists' Network`,
          images: [
            {
              url: url + cover,
              alt: "OG Image",
            },
          ],
        }}
      />
      <Layout title={title}>
        <YellowNews
          href={`/portfolio/${lang}/${router.query.slug}`}
          lang={router.query.lang}
          date={date}
        >
          {title}
        </YellowNews>

        {/* Content Section */}
        <div className="container my-20">
          <div className="justify-center row">
            <div className="md:col-10 lg:col-8">
              <img
                style={{ maxHeight: "400px" }}
                className="object-cover w-full h-auto mb-10"
                src={cover}
                alt={title}
              />

              <div className="prose max-w-none">
                <ReactMarkdown children={content} />
              </div>
              <Disclaimer />
            </div>
          </div>
        </div>

        {/* Author Section */}
        <AuthorSection authors={authors} published={published} />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const albanianFiles = getCollection("content/blog/al");

  const albPaths = albanianFiles.map((file) => ({
    params: {
      lang: "al",
      slug: file.slug,
    },
  }));

  const mkFiles = getCollection("content/blog/mk");

  const mkPaths = mkFiles.map((file) => ({
    params: {
      lang: "mk",
      slug: file.slug,
    },
  }));

  return {
    paths: [...albPaths, ...mkPaths],
    fallback: false,
  };
}

export async function getStaticProps({ params: { lang, slug } }) {

  let items = getCollection(`content/blog/${lang}`);

  let data = items.find((item) => item.slug === slug);

  let authors = [];

  data.author.forEach((item) => {
    authors.push(parseData("content/participants", slugify(item)));
  });

  authors = authors.map((author) => {
    return {
      name: author.data.name,
      slug: slugify(author.data.name),
      image: author.data.image || null,
    };
  });

  return {
    props: {
      data,
      content: data.content,
      authors,
    },
  };
}
