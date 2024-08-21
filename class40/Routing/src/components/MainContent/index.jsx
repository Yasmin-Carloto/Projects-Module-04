function MainContent() {
    return (
        <main className="bg-yellow-300 p-6 h-screen">
            <section className="flex justify-around items-center">
                <div className="w-2/5 bg-orange-700 p-6 rounded-xl text-white">
                    <h2 className="text-2xl border-b-2 text-center p-2">Main Card 1</h2>
                    <p className="p-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ab illum placeat eaque possimus, quasi nisi dolorem dicta tempora dolorum.</p>
                </div>

                <div className="w-2/5 bg-orange-700 p-6 rounded-xl text-white">
                    <h2 className="text-2xl border-b-2 text-center p-2">Main Card 2</h2>
                    <p className="p-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ab illum placeat eaque possimus, quasi nisi dolorem dicta tempora dolorum.</p>
                </div>
            </section>
        </main>
    )
}

export default MainContent