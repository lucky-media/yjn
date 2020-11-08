import Link from "next/link";
import Heading from "./Heading";

function Author({ name, slug, image, image_lg }) {
    return (
        <Link href={`/participants/${slug}`}>
            <a className="flex flex-row items-center mb-5 last:mb-0">
                <div className="w-20 h-32 lg:w-12 lg:h-16">
                    <img className="w-full h-full object-cover rounded" src={image} srcSet={image_lg} alt={name} />
                </div>
                <h4 className="font-bold text-base text-blue-400 ml-3">{name}</h4>
            </a>
        </Link>
    )
}

export default function AuthorSection({ authors, published }) {
    return (
        <div className="bg-gray-600">
            <div style={{ height: '2px' }} className="w-full bg-gray-500 opacity-25"></div>
            <div className="container py-16">
                <div className="row justify-between">
                    <div className="md:col-5">
                        <Heading>About the Authors</Heading>

                        <div className="flex flex-col mt-6">
                            <div className="row">


                                <div className="lg:col-6 py-4">
                                    {authors.map(item => {
                                        return <Author key={item.name} name={item.name} slug={item.slug} image={item.image} image_lg={item.image_lg} />
                                    })}
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="md:col-5 mt-16 md:mt-0">
                        <Heading>Published in</Heading>
                        <div className="flex flex-col mt-6 space-y-2">
                            {Object.entries(published).map(([key, value]) => {
                                return (
                                    <a target="_blank" className="text-blue-400 text-xl font-bold mr-1 hover:underline" href={value}>
                                        {key}
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
