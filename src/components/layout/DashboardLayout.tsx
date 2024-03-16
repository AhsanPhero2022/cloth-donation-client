
import { Layout, Menu } from 'antd';

import { NavLink, Outlet } from 'react-router-dom';
import logo from '../../assets/headerLogo.png'
import DashboardNavbar from '../../pages/navbar/DashboardNavbar';


const {  Content, Footer, Sider } = Layout;



const items = [
  {
    key: 4,
    label: <NavLink to='/'>Home</NavLink>
},
   
    {
        key: 2,
        label: <NavLink to='/dashboard'>Dashboard</NavLink>
    },
    {
      key: 5,
      label: <NavLink to='/dashboard/leader-board'>Leader Board</NavLink>
  },
    {
        key: 3,
        label: <NavLink to='/dashboard/create-winter-clothes'>Add Winter Clothes</NavLink>
    },
    
    
    {
      key: 1,
      label: <NavLink to='/dashboard/allWinterClothes'>All Winter Clothes</NavLink>
  },
    {
      key: 6,
      label: <NavLink to='/dashboard/create-testimonial'>Create Testimonial</NavLink>
  },
  
   
   
]

const DashboardLayout = () => {

    

    return (
        <Layout className='min-h-screen'>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
         >
          <div className='w-1/2 mx-auto'>
            
            <img src={logo} alt="" />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
        </Sider>
        <Layout>
         <Content>
            <div
              style={{
                
                minHeight: 360,
           
              }}
              
            >
            <DashboardNavbar/>
             <Outlet/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Charity website ©{new Date().getFullYear()} Created by Sharif
          </Footer>
        </Layout>
      </Layout>
    );
};

export default DashboardLayout;