interface IHomeProps {
    data?: any[];
}

const HomePage = ({ data }: IHomeProps) => {
    return (
        <>
            <main className="flex min-h-screen items-center justify-center bg-gray-100">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-blue-600">Real-Time SSR Page 🚀</h1>
                    <p className="text-gray-700 mt-2">{data}</p>
                </div>
            </main>
        </>
    )
}

export default HomePage;