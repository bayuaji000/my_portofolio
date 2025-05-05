import React, { FC } from "react";
import NavLink from "./Navlink";

interface Link {
    path: string;
    title: string;
}

interface MenuOverlayProps {
    links: Link[];
}

const MenuOverlay: FC<MenuOverlayProps> = ({ links }) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link: Link, index: number) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
        </ul>
    );
};

export default MenuOverlay;