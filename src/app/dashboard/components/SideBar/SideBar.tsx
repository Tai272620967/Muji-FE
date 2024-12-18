"use client";
import { useState } from "react";
import "./SideBar.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AccordionCustom from "@/base/components/Accordion/Accordion";

const SideBar: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const router = useRouter();

  const items = [
    { id: 0, text: "Overview", icon: "/images/home.svg", path: "/dashboard" },
    { id: 1, text: "Users", icon: "/images/circle-user.svg", path: "/dashboard/user" },
    { id: 2, text: "Products", icon: "/images/box-open.svg", path: "/dashboard/product" },
    { id: 3, text: "Orders", icon: "/images/rectangle-list.svg", path: "/dashboard/order" },
    { id: 4, text: "Chart", icon: "/images/chart-simple.svg", path: "/dashboard/chart" },
  ];

  const handleSelect = (id: number, path: string) => {
    setSelectedIndex(id);
    router.push(path);
  };

  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__title">
        <Image src="/images/logo-muji.svg" width={150} height={30} alt="Logo" />
        {/* <h1>MUJI</h1> */}
      </div>
      <ul className="sidebar__list">
        {items.map((item) => (
          <li
            key={item.id}
            className={`sidebar__list__item ${
              selectedIndex === item.id ? "selected" : ""
            }`}
            onClick={() => handleSelect(item.id, item.path)}
          >
            <Image
              src={item.icon}
              alt={`${item.text} icon`}
              width={16}
              height={16}
            />
            <span className="sidebar__list__item-text">{item.text}</span>
          </li>
        ))}
        <AccordionCustom header="Products" items={["list product", "create product"]}/>
      </ul>
    </div>
  );
};

export default SideBar;
