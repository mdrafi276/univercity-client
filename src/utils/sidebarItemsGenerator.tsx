import { NavLink } from "react-router-dom";
import { TSidebarItem } from "../types/sidebar.types";



export const sidebarItemsGeneratro = (itmes) => {
    const sidebarItems = itmes.reduce(
        (acc: TSidebarItem[], item) => {
            if (item.path && item.name) {
                acc.push({
                    key: item.name,
                    label: <NavLink to={`/${item.role}/${item.path}`}>{item.name}</NavLink>,
                });
            }

            if (item.children) {
                acc.push({
                    key: item.name,
                    label: item.name,
                    children: item.children.map((child) => ({
                        key: child.name,
                        label: <NavLink to={`/${child.role}/${child.path}`}>{child.name}</NavLink>,
                    })),
                });
            }

            return acc;
        },
        []
    );
    return sidebarItems
}