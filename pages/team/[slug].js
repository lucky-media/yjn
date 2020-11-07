import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/layout/Layout";
import YellowHeader from "../../components/YellowHeader";
import ReactMarkdown from "react-markdown";


export default function singleParticipant({ content, data }) {

    const { name, position, image, image_lg } = data;

    return (
        <Layout title={name}>
            <YellowHeader desc={position}>
                {name}
            </YellowHeader>

            <div className="container mt-20 mb-20 md:mb-32 md:mt-32">
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
        </Layout>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync("content/team");

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
        .readFileSync(path.join("content/team", slug + ".md"))
        .toString();

    let { data, content } = matter(markdownWithMetadata);

    return {
        props: {
            data,
            content
        },
    };
}