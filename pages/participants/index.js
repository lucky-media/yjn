import fs from "fs";
import matter from "gray-matter";
import Layout from "../../components/layout/Layout";
import YellowHeader from "../../components/YellowHeader";
import Card from "../../components/Card";
import { groupBy } from "../../utils/helpers";

export default function index({ items }) {
    return (
        <Layout title="Participants">
            <YellowHeader>Participants</YellowHeader>

            <div className="container my-24">
                {Object.keys(items).sort((a, b) => b - a).map((item, index) => {
                    return (
                        <div key={index} className="justify-center mb-16 row">
                            <div className="col-12">
                                <p className="text-xl font-bold text-gray-500">Participants of {item}</p>
                            </div>
                            {
                                items[item].map(participant => {
                                    return <Card key={participant.slug} link="participants" item={participant} />
                                })
                            }
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

export async function getStaticProps() {

    const files = fs.readdirSync('content/participants');

    let items = files.map(filename => {
        const markdownWithMetadata = fs.readFileSync(`content/participants/${filename}`).toString();

        let {
            data,
            content
        } = matter(markdownWithMetadata);

        return {
            slug: filename.replace(".md", ""),
            ...data,
            content
        }
    });

    items = groupBy(items, 'year');

    return {
        props: {
            items,
        },
    };
}