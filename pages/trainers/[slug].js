import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/layout/Layout";
import YellowHeader from "../../components/YellowHeader";
import ReactMarkdown from "react-markdown";


export default function singleParticipant({ content, data }) {

    const { name, image, image_lg } = data;

    return (
        <Layout title={name}>
            <YellowHeader>
                {name}
            </YellowHeader>

            <div className="container mt-20 mb-20 md:mb-32  md:mt-32">
                <div className="row justify-between">
                    <div className="md:col-5">
                        <div className="max-w-md">
                            <img className="w-full h-full rounded-full object-cover mb-10 md:mb-0"
                                srcSet={image_lg} src={image} alt={name} />
                        </div>
                    </div>
                    <div className="md:col-6 md:offset-1 md-content">
                        <ReactMarkdown source={content} />
                    </div>
                </div>
            </div>
        </Layout>
    )
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
            content
        },
    };
}