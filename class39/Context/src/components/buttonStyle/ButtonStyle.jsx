/* eslint-disable react/prop-types */
function ButtonStyle({buttonText, buttonAction}) {
    return(
        <button 
            className="p-2 m-2 border-2 border-gray-950 hover:bg-violet-700 rounded-3xl"
            onClick={() => buttonAction()}
        >
            {buttonText}
        </button>
    )
}

export default ButtonStyle