import { Menu } from "antd";
import Layout, { Header } from "antd/lib/layout/layout";
import Link from "next/link";

export default function Navbar() {
  return (
    <Layout>
      <Header className="header">
        <Link href="/" passHref>
          <h1 className="logo">Goals</h1>
        </Link>
        <Menu theme="dark" mode="horizontal" className="menu">
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}
