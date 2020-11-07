import Link from "next/link"

export default function Trainer({ trainer }) {
    return (

        <div className="md:col-6 xl:col-4 mt-10">
            <Link href={`/trainers/${trainer.slug}`}>
                <div className="flex flex-row items-center cursor-pointer">
                    <div className="lg:w-24 lg:h-24 w-16 h-16">
                        <img src={trainer.image} className="w-full h-full rounded-full object-cover" alt={trainer.name} />
                    </div>
                    <div className="flex flex-col ml-5">
                        <h1 className="font-bold text-blue-400 text-xl">{trainer.name}</h1>
                        <p className="text-gray-500 hover:text-blue-400 font-bold text-justify text-sm mt-3">
                            Read More
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
