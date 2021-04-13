import { Router } from '@reach/router'
import React from 'react'
import { DetailedPost } from './components/DetailedPost'
import { PageLayout } from './components/PageLayout'
import { PostList } from './components/PostList'
import {NotFound} from './components/NotFound'

function App() {
  return (
    <div className='App'>
      <PageLayout />
      <Router>
        <NotFound default />
        <PostList path='/' />
        <PostList path='/tutorials' category={'6075cbce14ec542bb8a7f22e'} />
        <PostList path='/lifestyle' category={'6075cbe514ec542bb8a7f22f'} />
        <PostList path='/inspiration' category={'6075cbfb14ec542bb8a7f230'} />
        <PostList path='/stories' category={'6075cc0b14ec542bb8a7f231'} />
        <DetailedPost path='/detail/:postId' />
      </Router>
    </div>
  )
}

export default App
