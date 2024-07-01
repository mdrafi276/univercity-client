import { Layout, Menu, MenuProps } from 'antd'

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {

    const items: MenuProps["items"] = [
        {
            key: '1',
            label: 'Dashboard'
        },
        {
            key: '2',
            label: 'Profile'
        },
        {
            key: '3',
            label: 'User management',
            cheldren: [
                {
                    key: '1',
                    label: 'Create Admin',
                },
                {
                    key: '2',
                    label: "Create Student"
                }
            ]
        },
    ]






    return (
        <Layout style={{ height: '100vh' }}>
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
                <div style={{ color: 'white', textAlign: 'center', height: "", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <h1>Ph Uni</h1>
                </div>

                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,

                        }}
                    >
                        content
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', backgroundColor: 'red' }}>
                    it's footer
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;