export default function Padding({padding, children}){
    return <div style={{padding: padding, gap: "15px", display: "flex", flexDirection: "column"}}>{children}</div>
}