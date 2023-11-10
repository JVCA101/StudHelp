interface GroupsRequestStyleProps {
  adm: string;
  currentMembers: string[];
  totalMembers: number;
  day: string;
  time: string;
  local: string;
  open: boolean;
}

export const GroupsRequestStyle = ({
  open,
  adm,
  currentMembers,
  totalMembers,
  day,
  time,
  local,
}: GroupsRequestStyleProps) => {
  const numberCurrentMembers = currentMembers.length;
  return (
    <div className="px-8 w-full">
      <div>
        <div
          className={`bg-blue-900 ${
            open ? "w-[300px] h-[19rem]" : "w-[250px] h-[16rem]"
          }  relative  rounded-[40px]  top-3`}
        >
          <div
            className={`bg-blue-600  ${
              open ? "w-[102%]" : "w-[102%]"
            } h-[95%] rounded-[40px] left-5  relative`}
          >
            <div className="">
              <h1
                className={`  ${
                  open ? "text-3xl top-[15rem]" : "text-[1.4rem] top-[12.1rem]"
                }  left-[35%]  text-white  hover:text-blue-300  relative hover:font-medium ${
                  open ? "hover:text-[2.0rem]" : "hover:text-[1.5rem]"
                } font-roboto duration-300 cursor-pointer`}
              >
                Entrar
              </h1>
            </div>
            <div
              className={`bg-blue-400 ${
                open ? "w-[100%]" : "w-[102%]"
              } h-[80%]   rounded-[40px]  relative bottom-10 `}
            >
              <p
                className={`${
                  open ? "text-2xl" : "text-[1.2rem]"
                } font-roboto text-white p-7 duration-0`}
              >
                Admin: {adm} <br />
                N° de membros: {numberCurrentMembers}/{totalMembers} <br />
                Dia: {day} <br />
                Horário: {time} <br />
                Local: {local} <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupsRequestStyle;
