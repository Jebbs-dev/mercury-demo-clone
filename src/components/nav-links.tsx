import {
  ArrowRightLeft,
  BookOpenText,
  CreditCard,
  Home,
  LineChart,
  List,
  Warehouse,
} from "lucide-react";

import Link from "next/link";

interface NavLinksProps {}

const links = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Transactions", href: "/transactions", icon: List },
  { name: "Payments", href: "/payments", icon: ArrowRightLeft },
  { name: "Cards", href: "/cards", icon: CreditCard },
  { name: "Accounting", href: "/accounting", icon: BookOpenText },
  { name: "Capital", href: "/capital", icon: LineChart },
  { name: "Accounts", href: "/", icon: Warehouse },
];

const NavLinks: React.FC<NavLinksProps> = () => {
  return (
    <div>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <>
            <Link href={link.href}>
              <LinkIcon />
              <span className="text-[#41415a]">{link.name}</span>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default NavLinks;
