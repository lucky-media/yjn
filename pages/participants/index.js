import fs from "fs";
import matter from "gray-matter";
import Layout from "../../components/layout/Layout";
import YellowHeader from "../../components/YellowHeader";
import Card from "../../components/Card";

export default function index({ items }) {
    return (
        <Layout title="Participants">
            <YellowHeader>Participants</YellowHeader>

            <div className="container my-24">
                <div className="row justify-center">
                    {items.map(item => {
                        return <Card key={item.slug} link="participants" item={item} />
                    })}
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


    return {
        props: {
            items,
        },
    };
}