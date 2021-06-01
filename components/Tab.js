import { useEffect, useState } from 'react'

export default function Tab({ title, children, initial }) {

    const [active, setActive] = useState(false);

    useEffect(() => {
        if (initial) {
            setActive(true)
        }
    }, [])

    return (
        <div className="bg-white border border-gray-300 shadow">
            <button onClick={() => setActive(!active)} className="w-full px-8 py-6 text-xl font-bold text-left text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 hover:bg-gray-100">
                {title}
            </button>
            {active &&
                <div className="p-8 -mt-8">
                    {children}
                </div>
            }

        </div>
    )
}
