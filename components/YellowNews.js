import SVG from "react-inlinesvg";
import dayjs from "dayjs";
import Link from "next/link";

export default function YellowNews({ children, date, href, lang }) {

    const language = lang === "mk" ? "Albanian" : "Macedonian";

    return (
        <div className="bg-yellow-500">
            <div className="container py-20">
                <div className="row justify-center">
                    <div className="lg:col-10">
                        <h1 className="font-black text-center text-3xl md:text-4xl lg:text-5xl text-blue-500 leading-tight">
                            {children}
                        </h1>
                        <div className="flex flex-row justify-center mt-8">
                            <div className="flex flex-row items-center">
                                <SVG src="../../svg/calendar.svg" className="fill-current text-blue-500 w-6 h-6" />
                                <p className="text-blue-500 font-bold text-sm ml-3">
                                    {dayjs(date).format('MMMM D, YYYY')}
                                </p>
                            </div>
                            <div className="mx-2 text-blue-500 font-bold">|</div>
                            <div className="flex flex-row items-center">
                                <p className="text-blue-500 font-bold">
                                    Language:
                                    <Link href={href}>
                                        <a className="ml-2">
                                            {language}
                                        </a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
