import { useState } from "react"
import { Navigate } from "react-router-dom"

function Contact({children, isLoggedIn}) {
    return (
        <main className="bg-orange-300 p-6 h-screen">
            {isLoggedIn ? (
                <section className="flex justify-around items-center">
                    <div className="w-2/5 bg-sky-400 p-6 rounded-xl">
                        <h2 className="text-2xl border-b-2 text-center p-2 border-black">Conatct Card 1</h2>
                        <p className="p-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ab illum placeat eaque possimus, quasi nisi dolorem dicta tempora dolorum.</p>
                    </div>

                    <div className="w-2/5 bg-sky-400 p-6 rounded-xl">
                        <h2 className="text-2xl border-b-2 text-center p-2 border-black">Contact Card 1</h2>
                        <p className="p-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ab illum placeat eaque possimus, quasi nisi dolorem dicta tempora dolorum.</p>
                    </div>
                </section>
            ) : (
                children
            )}
        </main>
    )
}

export default Contact