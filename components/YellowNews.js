import SVG from "react-inlinesvg";
import dayjs from "dayjs";
import Link from "next/link";

export default function YellowNews({ children, date, href, lang }) {
  const language = lang === "mk" ? "Albanian" : "Macedonian";

  return (
    <div className="bg-yellow-500">
      <div className="container py-20">
        <div className="justify-center row">
          <div className="lg:col-10">
            <h1 className="text-3xl font-black text-center text-blue-500 md:text-4xl lg:text-5xl">
              {children}
            </h1>
            <div className="flex flex-row justify-center mt-8">
              <div className="flex flex-row items-center">
                <SVG
                  src="../../svg/calendar.svg"
                  className="w-6 h-6 text-blue-500 fill-current"
                />
                <p className="ml-3 text-sm font-bold text-blue-500">
                  {dayjs(date).format("MMMM D, YYYY")}
                </p>
              </div>
              <div className="mx-2 font-bold text-blue-500">|</div>
              <div className="flex flex-row items-center">
                <p className="font-bold text-blue-500">
                  Language:
                  <Link href={href}>
                    <a className="ml-2">{language}</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
