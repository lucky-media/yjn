import fs from "fs";
import { slugify, parseData, parseWithDate } from "../../../content/content";
import Layout from "../../../components/layout/Layout";
import ReactMarkdown from "react-markdown";
import YellowNews from "../../../components/YellowNews";
import Disclaimer from "../../../components/Disclaimer";
import AuthorSection from "../../../components/AuthorSection";
import { useRouter } from "next/router";

export default function porfolioIndex({ content, data, authors }) {
  const { title, cover, date, published } = data;
  const router = useRouter();

  let lang = router.query.lang === "mk" ? "al" : "mk";

  return (
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
        <div className="row justify-center">
          <div className="md:col-10 lg:col-8">
            <img
              style={{ maxHeight: "400px" }}
              className="w-full h-auto object-cover mb-10"
              src={cover}
              alt={title}
            />

            <div className="prose max-w-none">
              <ReactMarkdown source={content} />
            </div>
            <Disclaimer />
          </div>
        </div>
      </div>

      {/* Author Section */}
      <AuthorSection authors={authors} published={published} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const albanianFiles = fs.readdirSync("content/blog/al");

  const albPaths = albanianFiles.map((filename) => ({
    params: {
      lang: "al",
      slug: filename.replace(".md", ""),
    },
  }));

  const mkFiles = fs.readdirSync("content/blog/mk");

  const mkPaths = mkFiles.map((filename) => ({
    params: {
      lang: "mk",
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths: [...albPaths, ...mkPaths],
    fallback: false,
  };
}

export async function getStaticProps({ params: { lang, slug } }) {
  let { data, content } = parseWithDate(`content/blog/${lang}`, slug);

  let authors = [];

  data.author.forEach((item) => {
    authors.push(parseData("content/participants", slugify(item)));
  });

  authors = authors.map((author) => {
    return {
      name: author.data.name,
      slug: slugify(author.data.name),
      image: author.data.image,
      image_lg: author.data.image_lg,
    };
  });

  return {
    props: {
      data,
      content,
      authors,
    },
  };
}
