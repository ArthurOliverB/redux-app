import React from 'react';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

export default function Nav() {
    
    return(
        <Sider>
            <Menu>
                <Menu.Item>All Movies</Menu.Item>
                <Menu.Item>Watched Movies</Menu.Item>
            </Menu>
        </Sider>
    );
}