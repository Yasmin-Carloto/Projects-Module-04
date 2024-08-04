/* eslint-disable react/prop-types */
import "./Content.css"

const Content = ({contentText}) => {
    return (
        <main className="content-container">
            {contentText}
        </main>
    )
}

export default Content