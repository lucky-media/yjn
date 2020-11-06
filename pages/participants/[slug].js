import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/layout/Layout";
import YellowHeader from "../../components/YellowHeader";
import ReactMarkdown from "react-markdown";
import Heading from "../../components/Heading";


export default function singleParticipant({ content, data }) {

    const { name, image, image_lg } = data;

    return (
        <Layout title={name}>
            <YellowHeader>
                {name}
            </YellowHeader>

            <div className="container mt-20 mb-5 md:mt-32">
                <div className="row justify-between">
                    <div className="md:col-6">
                        <img style={{ maxHeight: '800px' }} className="w-full h-auto object-cover mb-10 md:mb-0"
                            srcSet={image_lg} src={image} alt={name} />
                    </div>
                    <div className="md:col-6 md-content">
                        <ReactMarkdown source={content} />
                    </div>
                </div>
            </div>

            <div className="container mb-32">
                <div className="row">
                    <div className="md:col-5">
                        <Heading>Published work</Heading>
                    </div>
                </div>
                <div className="row">
                    {/* @include('_partials.news', ['news' => $post]) */}
                    <div className="col-12 mt-6">
                        <p className="text-blue-700">No published posts yet.</p>
                    </div>
                </div>
            </div>


        </Layout>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync("content/participants");

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
        .readFileSync(path.join("content/participants", slug + ".md"))
        .toString();

    let { data, content } = matter(markdownWithMetadata);

    return {
        props: {
            data,
            content
        },
    };
}