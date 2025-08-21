import { ChartPie, ClipboardPen, Palette, Users } from "lucide-react";

export const navLinks = [
  {
    title: "Dashboard",
    url: "/admin/",
    icon: ChartPie,
  },
  {
    title: "User Management",
    url: "/admin/users",
    icon: Users,
  },
  {
    title: "Apointments",
    url: "/admin/apointments",
    icon: ClipboardPen,
  },
  {
    title: "Customization",
    url: "/admin/customization",
    icon: Palette,
  },
];
