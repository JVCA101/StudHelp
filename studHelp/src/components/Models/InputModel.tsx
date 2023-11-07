interface InputModelProps {
  type: string;
  placeholder: string;
}

export const InputModel = ({ type, placeholder }: InputModelProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border border-blue-950 rounded-lg text-blue-950 placeholder-blue-950 focus:outline-none focus:ring  w-full block p-2"
    ></input>
  );
};

export default InputModel;
