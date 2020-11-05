import Link from "next/link"
import SVG from "react-inlinesvg";

export default function Navigation() {
    return (
        <div className="bg-white sticky md:h-24 top-0" style={{ zIndex: 9999 }}>
            <div className="container">
                <div className="row justify-between items-center py-4 text-base text-black">
                    <div className="col-2">
                        <Link href="/">
                            <a>
                                <SVG className="fill-current h-16 w-auto" src="../svg/logo.svg" />
                            </a>
                        </Link>
                    </div>

                    <div className="col-2 md:hidden block">
                        <label htmlFor="menu-toggle" className="pointer-cursor">
                            <svg className="fill-current text-blue-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <title>menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </label>
                    </div>

                    <input className="hidden" type="checkbox" id="menu-toggle" />

                    <div className="transition opacity-0 hidden flex-col md:opacity-100 md:col-8 md:flex md:flex-row items-center justify-end pt-6 md:pt-0"
                        id="menu">
                        <a className="transition w-full text-center text-xl uppercase font-bold text-gray-500 py-6 border-blue-500 border-b-2 last:border-b-0 md:text-base md:normal-case md:pt-0 md:pb-2 md:border-transparent md:border-b-2 md:hover:border-blue-500 md:w-auto md:mr-6 last:mr-0 hover:text-blue-500"
                            href="">
                            Menu
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
