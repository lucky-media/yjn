import Link from "next/link";

export default function Card({ item, link }) {
    return (
        <div className="col-10 sm:col-6 md:col-4 lg:col-3 mt-16 lg:mt-8">
            <Link href={`/${link}/${item.slug}`}>
                <div className="bg-white overflow-hidden cursor-pointer h-70 rounded-lg shadow-lg blue-overlay flex flex-col-reverse bg-no-repeat bg-center bg-cover"
                    style={{ backgroundImage: `url('${item.image}')` }}>
                    <div className="w-full absolute z-50">
                        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                            className="absolute left-0 w-full block" style={{ height: '95px', top: '-94px' }}>
                            <polygon points="-30,95 583,95 583,65" className="text-white fill-current"></polygon>
                        </svg>
                        <div className="bg-white h-20 px-6 py-3">
                            <h5 className="font-bold text-blue-400">{item.name}</h5>
                            {item.position && <p className="text-gray-500 font-bold text-xs">{item.position}</p>}
                        </div>
                    </div>
                </div>
            </Link>
        </div>

    )
}
