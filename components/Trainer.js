import Link from "next/link"

export default function Trainer({ trainer }) {
    return (

        <div className="mt-10 md:col-6 xl:col-4">
            <Link href={`/trainers/${trainer.slug}`}>
                <div className="flex flex-row items-center cursor-pointer group">
                    <div className="w-16 h-16 lg:w-24 lg:h-24">
                        <img src={trainer.image} className="object-cover w-full h-full transition-all duration-300 ease-in-out border-4 border-transparent rounded-full group-hover:border-yellow-400" alt={trainer.name} />
                    </div>
                    <div className="flex flex-col ml-5">
                        <h1 className="pb-2 text-xl font-bold text-blue-400 transition-all duration-300 ease-in-out border-b-2 border-transparent group-hover:border-yellow-400">{trainer.name}</h1>
                        {trainer.year && <p className="mt-2 text-sm font-bold text-gray-400">{trainer.year}</p>}
                    </div>
                </div>
            </Link>
        </div>
    )
}
