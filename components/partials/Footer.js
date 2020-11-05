export default function Footer() {
    return (
        <footer>
            <div className="bg-blue-600">
                <div className="container">
                    <div className="row py-10">
                        <div className="col-12 md:col-6 lg:col-3 flex flex-row justify-center">
                            <img className="w-auto h-16 mr-2" src="/images/demlab.png" srcSet="/images/demlab@2x.png" alt="Democracy Lab" />
                            <img className="w-auto h-16" src="/images/embassy.jpg" srcSet="/images/embassy@2x.jpg" alt="US Embassy Skopje" />
                        </div>
                        <div className="col-12 md:col-6 lg:col-9 text-xs text-white text-center mt-8 md:mt-0">
                            This website is a product of the project “Young Journalists’ Network” implemented by Democracy Lab. This project was funded through a U.S. Embassy grant. The opinions, findings, and conclusions or recommendations expressed herein are those of the implementers/authors and do not necessarily reflect those of the U.S. Government.
                    </div>
                    </div>
                </div>
            </div>
            <div className="bg-blue-700">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-12">
                            <p className="text-xs md:text-sm text-white">© Copyright 2020 -  Made with
                                <span className="text-yellow-500 mx-1">&#9829;</span> from
                                <a className="ml-1 font-bold pb-2 border-b-2 border-transparent hover:border-yellow-500" href="http://www.luckymedia.mk">
                                    Lucky Media
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
