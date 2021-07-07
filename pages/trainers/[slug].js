import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/layout/Layout";
import YellowHeader from "../../components/YellowHeader";
import ReactMarkdown from "react-markdown";
import { NextSeo } from "next-seo";
import useUrl from "../../utils/useUrl";
import Image from "next/image"

export default function singleParticipant({ content, data }) {
  const url = useUrl();
  const { name, image, image_lg } = data;

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

        <div className="container mt-20 mb-20 md:mb-32 md:mt-32">
          <div className="justify-between row">
            <div className="md:col-5">
              <div className="max-w-md">
                <Image
                  className="object-cover w-full h-full mb-10 rounded-full md:mb-0"
                  width={600}
                  height={800}
                  src={image}
                  alt={name}
                />
              </div>
            </div>
            <div className="md:col-6 md:offset-1 md-content">
              <ReactMarkdown children={content} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("content/trainers");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMetadata = fs
    .readFileSync(path.join("content/trainers", slug + ".md"))
    .toString();

  let { data, content } = matter(markdownWithMetadata);

  return {
    props: {
      data,
      content,
    },
  };
}
