import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Heading from "../components/Heading";
import Layout from "../components/layout/Layout";
import AboutSection from "../components/partials/AboutSection";
import Trainer from "../components/Trainer";

export default function Home({ trainers }) {
  return (
    <Layout title="Home ">
      <div className="bg-yellow-500">
        <div className="container py-24 lg:py-32">
          <div className="row">
            <div className="lg:col-8">
              <h1 className="font-black text-2xl lg:text-5xl text-blue-500 leading-tight">
                Young Journalists’ Network
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Participants */}
      <Link href="/participants">
        <div className="blue-cover flex justify-center items-center cursor-pointer">
          <h1 className="text-4xl sm:text-5xl text-white text-center font-black absolute z-20">
            Meet our Participants
          </h1>
        </div>
      </Link>

      {/* Trainers */}
      <div className="bg-gray-600">
        <div className="container py-24">
          <div className="row">
            <div className="md:col-5">
              <Heading>Our Trainers</Heading>
            </div>
          </div>
          <div className="row">
            {trainers.map((trainer) => {
              return <Trainer key={trainer.slug} trainer={trainer} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("content/trainers");

  let trainers = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/trainers/${filename}`)
      .toString();

    let { data } = matter(markdownWithMetadata);

    return {
      slug: filename.replace(".md", ""),
      ...data,
    };
  });

  return {
    props: {
      trainers,
    },
  };
}
