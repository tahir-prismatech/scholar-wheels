import "./Button.css"

export default function Button({children, onClick, style}){
    return <button style={style} className="button" onClick={onClick}>{children}</button>
}