import React, { useEffect, useState } from 'react'
import logo from "../assets/iconWhite.png"
import user from "../assets/user.png"
import * as GiIcons from 'react-icons/gi'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as TbIcons from 'react-icons/tb'
import * as FaIcons from 'react-icons/fa'
import MenuItem from './MenuItem'



const menusItems = [
    {name: 'Dashboard', exact: true, to: "/", iconClassName: <AiIcons.AiFillDashboard/> },
    {
        name: "Sales",
        to: `/sales`,
        exact: true,
        iconClassName: <GiIcons.GiReceiveMoney/>,
        subMenus: [{ name: "Proposals", to: '/sales/proposals'}, {name: "Clients", to: '/sales/clients'}],
    },
    {name: "Permitting", to: `/permitting`, iconClassName: <BsIcons.BsFillEnvelopePaperFill/>},
    {name: "Engineering", to: `/engineering`, iconClassName: <TbIcons.TbTools/>},
    {name: "Warehouse", to: `/warehouse`, iconClassName: <TbIcons.TbBuildingWarehouse/>},
    {name: "Finance", to: `/finance`, iconClassName: <FaIcons.FaMoneyBillAlt/>},
];

const SideMenu = (props) => {
    const [inactive, setInactive] = useState(false);
    // Destructure the onCollapse prop
  const { onCollapse } = props;

    useEffect(() => {
        if(inactive){
            document.querySelectorAll('.sub-menu').forEach(el => {
                el.classList.remove("active");
            })
        }

        onCollapse(inactive);

    }, [inactive]);

    return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
        <div className='top-section'>
            <div className='logo'>
                <img src={logo} alt="webscript"/>
            </div>
            <div onClick={() => setInactive (!inactive)} className='toggle-menu-btn'>
                {inactive ? <TbIcons.TbSquareRoundedArrowRightFilled/> : <TbIcons.TbSquareRoundedArrowLeftFilled/>}
            </div>
        </div>

        <div className='search-controller'>
            <button className='search-btn'>
                <BsIcons.BsSearch/>
            </button>
            <input type='text' placeholder='search'/>
        </div>

        <hr/>

        <div className='divider'></div>

        <div className='main-menu'>
            <ul>
                {menusItems.map((menuItem, index) => (
                    <MenuItem 
                        key={index}
                        name={menuItem.name}
                        exact={menuItem.exact}
                        to= {menuItem.to}
                        subMenus={menuItem.subMenus || []}
                        iconClassName={menuItem.iconClassName}
                    />
                ))}
            </ul>
        </div>

        <div className='side-menu-footer'>
            <div className='avatar'>
                <img src={user} alt='user'/>
            </div>
            <div className='user-info'>
                <h5>Ernesto Sosa</h5>
                <p>ernesto@texasenergyresources.com</p>
            </div>
        </div>
    </div>
    );
}

export default SideMenu;
