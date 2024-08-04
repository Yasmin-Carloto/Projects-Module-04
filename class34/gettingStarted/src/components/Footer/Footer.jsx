import "./Footer.css"

const Footer = (props) => {
    return (
        <footer>
            <h1>Desenvolvido por</h1>
            <a href={props.link}>{props.developer}</a>
        </footer>
    )
}

export default Footer