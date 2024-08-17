import { useState } from "react";

function StdForm() {
    const [name, setName] = useState('')

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Olá, ${name}`)
    }

    return(
        <form onSubmit={handleSubmit} className="p-2">
            <label htmlFor="">
                Nome:
                <input
                    className="border-2 m-1 border-black rounded-md" 
                    type="text" 
                    value={name} 
                    onChange={handleChange} 
                />
            </label>
            <button className="p-2 bg-stone-500	text-white rounded-md my-2 hover:bg-gray-400" type="submit">Enviar</button>
        </form>
    )
}

export default StdForm