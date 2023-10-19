//import React from "react";

type HeaderProps = {
  texto: string;
  teste: boolean;
};

export const Header = ({ texto }: HeaderProps) => {
  return <button>{texto}</button>;
};
