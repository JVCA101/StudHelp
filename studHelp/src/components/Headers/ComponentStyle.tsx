interface Props {
  children: React.ReactNode;
}

export const ComponentStyle = ({ children }: Props) => {
  return (
    <div
      className="border  shadow-xl mt-5 px-4 rounded-[30px] bg-white"
      style={{ margin: "10px" }}
    >
      <div className="py-4">{children}</div>
    </div>
  );
};
