interface Props {
  children: React.ReactNode;
}

export const ComponentStyle = ({ children }: Props) => {
  return (
    <div
      className="border  shadow-xl mt-5 px-4 py-5 rounded-[15px] bg-white"
      style={{ margin: "20px" }}
    >
      <div className="py-4">{children}</div>
    </div>
  );
};
