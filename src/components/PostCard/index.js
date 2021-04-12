import React from 'react'
import { Card } from 'antd';
import { EditOutlined, FullscreenOutlined } from '@ant-design/icons';
import { Link } from '@reach/router';


export const PostCard = ({id, title, description, cover}) => {
  return (
    <Card
      style={{ width: 500 }}
      cover={
        <img
          alt='example'
          className='postImage'
          src={cover}
        />
      }
      actions={[
        <FullscreenOutlined key='open' />,
        <EditOutlined key='edit' />,
      ]}
    >
      <Link to={`/detail/${id}`}>{title}</Link>
      <h4>{description}</h4>
    </Card>
  )
}
