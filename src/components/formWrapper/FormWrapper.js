import "./FormWrapper.css";

export default function FormWrapper({ children, onSubmit }) {
  return (
    <form className="form-wrapper" onSubmit={onSubmit}>
      {children}
    </form>
  );
}
