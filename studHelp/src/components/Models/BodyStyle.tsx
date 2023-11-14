interface Props {
  children: React.ReactNode;
}

export const BodyStyle = ({ children }: Props) => {
  return (
    <div className="py-2 h-[80%]">
      <div className="overflow-y-scroll px-4 h-full">{children}</div>
    </div>
  );
};

export default BodyStyle;
