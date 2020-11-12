import fs from "fs";
import matter from "gray-matter";
import Layout from "../../components/layout/Layout";
import News from "../../components/News";
import YellowHeader from "../../components/YellowHeader";

export default function index({ news }) {
    return (
        <Layout title="Portfolio">
            <YellowHeader>Portfolio</YellowHeader>

            <div className="container pt-10 pb-20">
                <div className="row">
                    {news.map(item => {
                        return <News news={item} key={item.slug} />
                    })}
                </div>
            </div>
        </Layout>


    )
}

export async function getStaticProps() {

    const files = fs.readdirSync('content/blog/mk');

    let items = files.map(filename => {
        const markdownWithMetadata = fs.readFileSync(`content/blog/mk/${filename}`).toString();

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

    // Sort by date
    items.sort((a, b) => b.date - a.date);

    items = Array.from(items).map(item => {
        return {
            ...item,
            date: item.date.toLocaleDateString(),
        }
    });


    return {
        props: {
            news: items,
        },
    };
}