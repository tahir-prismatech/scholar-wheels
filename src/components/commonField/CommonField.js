export default function CommonField({
    className,
    label,
    id,
    type,
    placeholder,
    value,
    onChange,
    error,
}) {
    return (
        <div className={className}>
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <input
                type={type}
                className={`form-control ${error ? "input-with-error" : ""}`}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}