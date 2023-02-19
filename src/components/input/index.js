import "./style.css";

const Input = ({ placeholder, value, onChange, name }) => {
  return (
    <input
      placeholder={placeholder}
      className="input"
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};

export default Input;
