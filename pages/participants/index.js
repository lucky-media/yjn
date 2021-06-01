import fs from "fs";
import matter from "gray-matter";
import Layout from "../../components/layout/Layout";
import YellowHeader from "../../components/YellowHeader";
import Card from "../../components/Card";
import Tab from "../../components/Tab"
import { groupBy } from "../../utils/helpers";

export default function index({ items }) {
    return (
        <Layout title="Participants">
            <YellowHeader>Participants</YellowHeader>

            <div className="container my-24">
                <div className="justify-center row">
                    <div className="col-12">
                        {Object.keys(items).sort((a, b) => b - a).map((item, index) => {
                            return (
                                <Tab key={index} initial={index === 0} title={`Participants of ${item}`}>
                                    <div className="row">
                                        {
                                            items[item].map(participant => {
                                                return (
                                                    <Card
                                                        key={participant.slug}
                                                        link="participants"
                                                        item={participant}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                </Tab>
                            )
                        })}
                    </div>
                </div>
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