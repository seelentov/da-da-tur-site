interface MenuBase {
    id: number,
    name: string,
    link: string,
    parent_id: number,
    in_footer: boolean,
    in_header: boolean,
    position: number,
}

interface Menu extends MenuBase {
    childrens: MenuBase[]
}