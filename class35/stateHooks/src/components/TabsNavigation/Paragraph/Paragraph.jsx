/* eslint-disable react/prop-types */
import "./Paragraph.css"

const Paragraph = ({paragraphContent}) => {    
    return (
        <ul className="paragraph-container">
            {paragraphContent.map(paragraph => (
                {...paragraph}
            ))}
        </ul>
    )
}

export default Paragraph