import { sidebarItemsGeneratro } from '../../utils/sidebarItemsGenerator';
import { adminPaths } from '../../routes/admin.routes';
import Sider from 'antd/es/layout/Sider';
import { Layout, Menu } from 'antd';
const { sidebar } = Layout;
const userRole = {
    ADMIN: 'admin',
    FACULTY: 'faculty',
    STUDENT: 'student',
}

const Sidebar = () => {

    const Sidebar = () => {
        const role = 'admin';
        let sidebarItems;
        switch (role) {
            case userRole.ADMIN: sidebarItemsGeneratro(adminPaths, userRole.ADMIN)

                break;
            case userRole.FACULTY: sidebarItemsGeneratro(adminPaths, userRole.FACULTY)

                break;
            case userRole.STUDENT: sidebarItemsGeneratro(adminPaths, userRole.STUDENT)

                break;

            default:
                break;
        }
    }
    return (
        <div>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div
                    style={{
                        color: 'white',

                        height: '4rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <h1>PH Uni</h1>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['4']}
                    items={sidebarItemsGeneratro(adminPaths)}
                />
            </Sider>
        </div>
    );
};

export default Sidebar; 