interface Props {
  children: React.ReactNode;
}

export const HeaderStyle = ({ children }: Props) => {
  return <div className="bg-white h-[15%] px-6 shadow-lg">{children}</div>;
};

export default HeaderStyle;
