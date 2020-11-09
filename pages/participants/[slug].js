import { parseFiles, parseData, getCollection } from "../../content/content"
import Layout from "../../components/layout/Layout";
import YellowHeader from "../../components/YellowHeader";
import ReactMarkdown from "react-markdown";
import Heading from "../../components/Heading";
import News from "../../components/News";

export default function singleParticipant({ content, data, posts }) {

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

            <div className="bg-gray-600">
                <div style={{ height: '2px' }} className="w-full bg-gray-500 opacity-25"></div>
                <div className="container pt-8 pb-20">
                    <div className="row">
                        <div className="md:col-4">
                            <Heading>Published Work</Heading>
                        </div>
                    </div>
                    <div className="row">
                        {posts.map(post => {
                            return <News news={post} key={post.title} />
                        })}
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export async function getStaticPaths() {

    const paths = parseFiles("content/participants")

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {

    let { data, content } = parseData("content/participants", slug);

    let posts = getCollection("content/portfolio_mk");

    // Filter for author
    posts = posts.filter(obj => {
        return Array.from(obj.author).find(el => el === data.name)
    })
        .sort((a, b) => b.date - a.date)


    posts = posts.map(item => {
        return {
            ...item,
            date: item.date.toLocaleDateString(),
        }
    });
    // Sort by date
    // posts = posts.sort((a, b) => b.date - a.date);

    return {
        props: {
            data,
            content,
            posts
        },
    };
}