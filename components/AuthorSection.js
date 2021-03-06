import Link from "next/link";
import Image from "next/image"
import Heading from "./Heading";

function Author({ name, slug, image, image_lg }) {
    return (
        <Link href={`/participants/${slug}`}>
            <a className="flex flex-row items-center mb-5 last:mb-0">
                <div className="w-20 h-32 lg:w-12 lg:h-16">
                    <Image
                        className="object-cover w-full h-full rounded"
                        src={image ? image : '/images/user.jpeg'}
                        width={48}
                        height={64}
                        alt={name} />
                </div>
                <h4 className="ml-3 text-base font-bold text-blue-400">{name}</h4>
            </a>
        </Link>
    )
}

export default function AuthorSection({ authors, published }) {
    return (
        <div className="bg-gray-600">
            <div style={{ height: '2px' }} className="w-full bg-gray-500 opacity-25"></div>
            <div className="container py-16">
                <div className="justify-between row">
                    <div className="md:col-5">
                        <Heading>About the Authors</Heading>

                        <div className="flex flex-col mt-6">
                            <div className="row">
                                {authors.map((item, i) => {
                                    return (
                                        <div key={item.slug} className="py-4 lg:col-6">
                                            <Author
                                                name={item.name}
                                                slug={item.slug}
                                                image={item.image} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 md:col-5 md:mt-0">
                        <Heading>Published in</Heading>
                        <div className="flex flex-col mt-6 space-y-2">
                            {published.map((media, index) => {
                                return (
                                    <a key={index} href={media.link} target="_blank" className="mr-1 text-xl font-bold text-blue-400 hover:underline">
                                        {media.media}
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
