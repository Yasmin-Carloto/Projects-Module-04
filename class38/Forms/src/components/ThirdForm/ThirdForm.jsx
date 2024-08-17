import { useState } from "react";

function ThirdForm() {
    const [formFieldsData, setFormFieldsData] = useState({
        name: "",
        email: "",
        password: "",
        confirmedPassword: ""
    })

    const [errors, setErrors] = useState({})

    const [submit, setSubmit] = useState(false)

    const validate = () => {
        const allErrors = {}

        if(formFieldsData.name == ""){
            allErrors.name = "Campo nome é obrigatório!"
        } else if(formFieldsData.name.length < 3){
            allErrors.name = "Campo nome está inválido!"
        }

        if(formFieldsData.email == ""){
            allErrors.email = "Campo email é obrigatório!"
        } else if(!/\S+@\S+\.\S+/.test(formFieldsData.email)){
            allErrors.email = "Campo email está inválido!"
        }

        if(formFieldsData.password == ""){
            allErrors.password = "Campo senha é obrigatório!"
        } else if(formFieldsData.password.length < 8){
            allErrors.password = "Campo senha deve ter 8 ou mais caracteres"
        }

        if(formFieldsData.confirmedPassword == ""){
            allErrors.confirmedPassword = "Campo de confirmar senha é obrigatório!"
        } else if(formFieldsData.confirmedPassword !== formFieldsData.password){
            allErrors.confirmedPassword = "O campo confirmar senha deve ser igual ao campo senha!"
        }

        return allErrors
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFieldsData(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const allErrors = validate()

        if(Object.keys(allErrors).length === 0){
            setSubmit(true)
            setErrors({})
        }else{
            setSubmit(false)
            setErrors(allErrors)
        }
    }

    return (
        <section className="bg-orange-50 flex flex-col items-center p-6">
            <form onSubmit={handleSubmit} className="p-4 bg-stone-50 rounded-md shadow-md text-center w-60">
                <h1 className="my-4 font-bold">Faça seu cadastro!</h1>

                <div className="my-2">
                    <input 
                        className="border-2 p-1 border-gray-200 rounded-lg bg-transparent text-sm w-full"
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Nome"
                        onChange={handleChange}
                    />
                    {errors.name && <p className="text-xs text-red-500 text-left m-1">{errors.name}</p>}
                </div>

                <div className="my-2">
                    <input 
                        className="border-2 p-1 border-gray-200 rounded-lg bg-transparent text-sm w-full"
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder="Email"
                        onChange={handleChange}
                    />
                    {errors.email && <p className="text-xs text-red-500 text-left m-1">{errors.email}</p>}
                </div>

                <div className="my-2">
                    <input 
                        className="border-2 p-1 border-gray-200 rounded-lg bg-transparent text-sm w-full"
                        type="text" 
                        name="password" 
                        id="password" 
                        placeholder="Senha"
                        onChange={handleChange}
                    />
                    {errors.password && <p className="text-xs text-red-500 text-left m-1">{errors.password}</p>}
                </div>

                <div className="my-2">
                    <input 
                        className="border-2 p-1 border-gray-200 rounded-lg bg-transparent text-sm w-full"
                        type="text" 
                        name="confirmedPassword" 
                        id="confirmedPassword" 
                        placeholder="Confirmar senha"
                        onChange={handleChange}
                    />
                    {errors.confirmedPassword && <p className="text-xs text-red-500 text-left m-1">{errors.confirmedPassword}</p>}
                </div>

                <button type="submit" className="w-full p-1 my-4 bg-orange-300 hover:bg-orange-400 rounded-md">Enviar</button>

                {submit && <p>🎉 Formulário enviado! 🎉</p>}
            </form>
        </section>
    )
}

export default ThirdForm