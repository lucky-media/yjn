import Link from "next/link";

export default function Card({ item, link }) {
    return (
        <div className="mt-16 col-10 sm:col-6 md:col-4 lg:col-3 lg:mt-8">
            <Link href={`/${link}/${item.slug}`}>
                <div className="flex flex-col-reverse overflow-hidden bg-white bg-center bg-no-repeat bg-cover rounded-lg shadow-lg cursor-pointer h-70 blue-overlay"
                    style={{ backgroundImage: `url('${item.image ? item.image : '/images/user.jpeg'}')` }}>
                    <div className="absolute z-50 w-full">
                        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                            className="absolute left-0 block w-full" style={{ height: '95px', top: '-94px' }}>
                            <polygon points="-30,95 583,95 583,65" className="text-white fill-current"></polygon>
                        </svg>
                        <div className="h-20 px-6 py-3 bg-white">
                            <h5 className="font-bold text-blue-400">{item.name}</h5>
                            {item.position && <p className="text-xs font-bold text-gray-500">{item.position}</p>}
                        </div>
                    </div>
                </div>
            </Link>
        </div>

    )
}
