export default function YellowHeader({ children, desc }) {
    return (
        <div className="bg-yellow-500">
            <div className="container py-20">
                <div className="row">
                    <div className="lg:col-8">
                        <h1 className="font-black text-3xl md:text-6xl text-blue-500 leading-tight">
                            {children}
                        </h1>
                        {desc && <p className="text-xl md:text-2xl font-black text-blue-500">{desc}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}
