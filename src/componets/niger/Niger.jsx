import s from "./Niger.module.css"

const Niger = ({ children, className }) => {
    return (
        <div className={[s.niger, className].join(" ")}>
            {children}
        </div>
    )
}
export default Niger