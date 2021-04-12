import React, {useEffect, useState} from 'react'
import { Layout, Menu } from 'antd'

import axios from 'axios';
import { Router, Link } from "@reach/router"
import { DetailedPost } from '../DetailedPost';
import { PostList } from '../PostList';

const { Header, Content } = Layout

export const PageLayout = () => {
  const [posts, setPosts] = useState([])
  
  useEffect(()=> {
    axios.get('http://localhost:1337/posts').then(response => {
      setPosts(response.data)
    });
  },[])

  return (
    <Layout className='layout'>
      <Header>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
          <Menu.Item key='1'>
            Home
          </Menu.Item>
          <Menu.Item key='2'>Posts</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '16px 50px' }}>
        <div className='site-layout-content'>
          <Router>
            <PostList posts={posts} path="/"/>
            <DetailedPost path="/detail/:postId"/>
          </Router>
        </div>
      </Content>
    </Layout>
  )
}
