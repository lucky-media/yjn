export default function Heading({ children }) {
    return (
        <h3 className="text-3xl text-blue-400 font-black">
            {children}
            <div style={{ height: '2px' }} className="w-full bg-blue-400 mt-5"></div>
        </h3>
    )
}
