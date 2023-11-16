interface InputModelProps {
  type: string;
  placeholder: string;
  inputContent: string;
  setInputContent: React.Dispatch<React.SetStateAction<string>>;
}

export const InputModel = ({
  type,
  placeholder,
  setInputContent,
  inputContent,
}: InputModelProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border border-blue-950 rounded-lg text-blue-950 placeholder-blue-950 focus:outline-none focus:ring  w-full block p-2"
      onChange={(e) => setInputContent(e.target.value)}
      value={inputContent}
    ></input>
  );
};

export default InputModel;
