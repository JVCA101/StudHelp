import { useState, Dispatch, SetStateAction } from "react";

type SidebarProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export function useSideBarProps(): SidebarProps {
  const [open, setOpen] = useState(false);

  return { open, setOpen };
}
