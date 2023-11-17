interface Props {
  open: boolean;
}
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

export const ProfileSettings = ({ open }: Props) => {
  if (!open) return null;
  return (
    <Link to="/">
      <div className="bg-white  border rounded-lg  border-black hover:scale-110 duration-300">
        <div className="text-[1.4rem] text-right px-2 cursor-pointer flex">
          <div className="mt-[2px] relative " style={{ fontSize: "30px" }}>
            <IoIosLogOut />
          </div>

          <h1>Sair</h1>
        </div>
      </div>
    </Link>
  );
};

export default ProfileSettings;
