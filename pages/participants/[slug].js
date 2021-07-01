import { parseFiles, parseData, getCollection } from "../../content/content";
import Layout from "../../components/layout/Layout";
import YellowHeader from "../../components/YellowHeader";
import ReactMarkdown from "react-markdown";
import Heading from "../../components/Heading";
import News from "../../components/News";
import { NextSeo } from "next-seo";
import useUrl from "../../utils/useUrl";

export default function singleParticipant({ content, data, posts }) {
  const { name, image } = data;
  const url = useUrl();
  return (
    <>
      <NextSeo
        title={`${name} - Young Journalists' Network`}
        openGraph={{
          title: `${name} - Young Journalists' Network`,
          images: [
            {
              url: url + image,
              alt: "OG Image",
            },
          ],
        }}
      />
      <Layout title={name}>
        <YellowHeader>{name}</YellowHeader>

        <div className="container mt-20 mb-5 md:mt-32">
          <div className="justify-between row">
            <div className="md:col-6">
              <img
                style={{ maxHeight: "800px" }}
                className="object-cover w-full h-auto mb-10 md:mb-0"
                src={image ? image : '/images/user.jpeg'}
                alt={name}
              />
            </div>
            <div className="md:col-6 md-content">
              <ReactMarkdown children={content} />
            </div>
          </div>
        </div>

        {posts.length > 0 && (
          <div className="bg-gray-600">
            <div
              style={{ height: "2px" }}
              className="w-full bg-gray-500 opacity-25"
            ></div>
            <div className="container pt-8 pb-20">
              <div className="row">
                <div className="md:col-4">
                  <Heading>Published Work</Heading>
                </div>
              </div>
              <div className="row">
                {posts.map((post) => {
                  return <News news={post} key={post.title} />;
                })}
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = parseFiles("content/participants");

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  let { data, content } = parseData("content/participants", slug);

  let posts = getCollection("content/blog/mk");

  // Filter for author
  posts = posts
    .filter((obj) => {
      return Array.from(obj.author).find((el) => el === data.name);
    })
    .sort((a, b) => b.date - a.date);

  posts = posts.map((item) => {
    return {
      ...item,
      date: item.date.toLocaleDateString(),
    };
  });

  // Sort by date
  posts = posts.sort((a, b) => b.date - a.date);

  return {
    props: {
      data,
      content,
      posts,
    },
  };
}
