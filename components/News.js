import SVG from "react-inlinesvg";
import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";

export default function News({ news }) {
  return (
    <div className="mt-16 md:col-6 lg:col-4 lg:mt-10">
      <Link href={`/portfolio/mk/${news.slug}`}>
        <a>
          <div className="flex flex-col h-full overflow-hidden bg-white rounded-lg shadow-md">
            <Image
              className="object-cover object-center w-full"
              width={400}
              height={240}
              src={news.cover}
              alt={news.title}
            />
            <div className="flex flex-col justify-between flex-1">
              <h1 className="p-6 text-lg font-bold leading-tight text-blue-500">
                {news.title}
              </h1>
              <div className="flex flex-row items-center justify-between p-6 bg-gray-600 border-t border-gray-400">
                <div className="inline-flex items-center">
                  <SVG
                    src="../svg/calendar.svg"
                    className="w-6 h-6 mr-2 text-blue-500 fill-current"
                  />
                  <p className="text-blue-500">
                    {dayjs(news.date).format("MMMM D, YYYY")}
                  </p>
                </div>
                <p className="inline-flex items-center text-blue-500 md:mb-2 lg:mb-0">
                  Read More
                  <SVG src="../svg/right.svg" className="w-4 h-4 ml-2" />
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
