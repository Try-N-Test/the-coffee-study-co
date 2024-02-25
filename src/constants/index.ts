import { BsChatRight } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { PiNotePencilLight } from "react-icons/pi";
import { CiYoutube } from "react-icons/ci";

export interface INavLink {
  id: string;
  title: string;
}

export const navLinks: INavLink[] = [
  {
    id: "#features",
    title: "Features",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact Us",
  },
];

export interface SidebarLink {
  icons: React.ElementType;
  route: string;
  label: string;
}

export const sidebarLinks: SidebarLink[] = [
  {
    icons: BsChatRight,
    route: "/communities/65db49eadab3d1062d048e7b/chat-room",
    label: "Chat Rooms",
  },
  {
    icons: GrGroup,
    route: "/communities/65db49eadab3d1062d048e7b/notes",
    label: "Notes",
  },
  {
    icons: PiNotePencilLight,
    route: "/communities/65db49eadab3d1062d048e7b/articles",
    label: "Articles",
  },
  {
    icons: CiYoutube,
    route: "/communities/65db49eadab3d1062d048e7b/videos",
    label: "Videos",
  },
];
