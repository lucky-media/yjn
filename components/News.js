import SVG from "react-inlinesvg";
import Link from "next/link";

export default function News({ news }) {
    return (
        <div className="md:col-6 lg:col-4 mt-16 lg:mt-10">
            <Link href={`/portfolio/mk/${news.slug}`}>
                <a>
                    <div className="h-full flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
                        <img style={{ height: '240px' }} className="w-full object-cover object-center" src={news.cover} alt={news.title} />
                        <div className="flex-1 flex flex-col justify-between">
                            <h1 className="text-blue-500 font-bold text-lg leading-tight p-6">{news.title}</h1>
                            <div className="bg-gray-600 flex flex-row justify-between items-center border-t border-gray-400 p-6">
                                <div className="inline-flex items-center">
                                    <SVG src="../svg/calendar.svg" className="fill-current text-blue-500 w-6 h-6 mr-2" />
                                    <p className="text-blue-500">{news.date}</p>
                                </div>
                                <p className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">Read More
                                    <SVG src="../svg/right.svg" className="w-4 h-4 ml-2" />
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}
