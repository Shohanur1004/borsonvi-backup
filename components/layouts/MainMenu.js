import Link from 'next/link';
import MainMenuData from '../../data/MainMenu.json';
import { FaAngleDown,FaAngleRight } from "react-icons/fa6";


const MainMenu = () => {

    return (
        <ul className="mainmenu">
            {MainMenuData?.map((menu, menuIndex) => (
                <li
                    className={menu.hasChildren ? "has-dropdown" : ""}
                    key={`menu-item-${menuIndex}`}
                >
                   
                    <Link href={menu.url}><a>{menu.title}  {menu.title=='Services'? <FaAngleDown /> : ''}</a></Link>
                    {menu.hasChildren && (
                        <ul className="axil-submenu" >
                            {menu.clildrens?.map((submenuItem, submenuIndex) => (
                                <li  className={submenuItem.hasChildren ? "has-dropdown show" : ""} key={`submenu-item-${submenuIndex}`}>
                                    <Link href={submenuItem.url}><a>{submenuItem.title}  {submenuItem.title=='CMS Development'? <FaAngleRight /> : ''}</a></Link>

                                    {submenuItem.hasChildren && (
                        <ul className="axil-submenu cmsmenu">
                            {submenuItem.clildrens?.map((ssubmenuItem, ssubmenuIndex) => (
                                <li key={`submenu-item-${ssubmenuIndex}`}>
                                    <Link href={ssubmenuItem.url}>{ssubmenuItem.title}</Link>
                                </li>
                            ))}
                        </ul>
                    )}












                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default MainMenu;
