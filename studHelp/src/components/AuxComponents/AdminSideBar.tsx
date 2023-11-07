import { useSelector } from "react-redux";
import { AppState } from "../../../props/state";
import SideBarModel from "../Models/SidebarModel";

export const AdminSideBar: React.FC = () => {
  const open = useSelector((state: AppState) => state.open); // Você deve tipar o state apropriadamente

  const Menus = [
    { title: "Usuários", src: "users", href: "admin/aluno" },
    {
      title: "Disciplinas",
      src: "book 1",
      href: "admin/disciplinas",
    },
    { title: "Grupos de Estudo", src: "reading-group 1", href: "admin/grupos" },
    { title: "Fórum", src: "chat 1", href: "admin/forum" },
  ];

  return (
    <SideBarModel
      open={open}
      textHead={"Bem vindo"}
      subText={"Gabriel Oliveira Quaresma"}
      subTextSize={"sm"}
      Menus={Menus}
    >
      <div></div>
    </SideBarModel>
  );
};

export default AdminSideBar;
