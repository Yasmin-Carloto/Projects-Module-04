import { useState } from "react";

function SecondForm() {
    const [address, setAddress] = useState({
        street: "",
        city: "",
        postalCode: ""
    })

    const [isEmpty, setIsEmpty] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(address.street == "" || address.city == "" || address.postalCode == ""){
            setIsEmpty(true)
        }
    }

    const handleChange = (event) => {
        if(isEmpty == true){
            setIsEmpty(false)
        }
        const { name, value } = event.target
        setAddress(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    return (
        <form onSubmit={handleSubmit} className="p-2">
            <label htmlFor="">
                Rua:
                <input 
                    className="border-2 m-1 border-black rounded-md"
                    type="text" 
                    name="street" 
                    id="street" 
                    value={address.street} 
                    onChange={handleChange}
                />
            </label>

            <label htmlFor="">
                Cidade:
                <input 
                    className="border-2 m-1 border-black rounded-md"
                    type="text" 
                    name="city" 
                    id="city" 
                    value={address.city} 
                    onChange={handleChange}
                />
            </label>

            <label htmlFor="">
                Código Postal:
                <input 
                    className="border-2 m-1 border-black rounded-md"
                    type="text" 
                    name="postalCode" 
                    id="postalCode" 
                    value={address.postalCode} 
                    onChange={handleChange}
                />
            </label>

            {isEmpty ? (
                <p className="text-red-500">Complete todos os campos!</p>
            ) : (
                <p>Seu endereço é Rua {address.street}, {address.city}, {address.postalCode}</p>
            )}

            <button className="p-2 bg-stone-500	text-white rounded-md my-2 hover:bg-gray-400" type="submit">Submeter</button>
        </form>
    )
}

export default SecondForm