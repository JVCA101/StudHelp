interface PageComponentsProps {
  open: boolean;
  children: React.ReactNode;
}

export const PageComponents = ({ children, open }: PageComponentsProps) => {
  return (
    <div
      className={`h-screen absolute text-blue-950 duration-1000 max-md:w-screen
        ${
          open
            ? "md:left-[40%] md:w-[60%] min-[1200px]:left-[25%]  min-[1200px]:w-[75%]"
            : "w-[80%] left-[20%] max-md:w-screen max-md:left-0"
        }`}
    >
      {children}
    </div>
  );
};

export default PageComponents;
