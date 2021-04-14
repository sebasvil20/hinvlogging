import { Router } from '@reach/router'
import React from 'react'
import { DetailedPost } from './components/DetailedPost'
import { PageLayout } from './components/PageLayout'
import { PostList } from './components/PostList'
import { NotFound } from './components/NotFound'
import { Helmet } from 'react-helmet'

function App() {
  return (
    <>
      <Helmet>
        <title>Hinvloggin' - 'bout everything</title>
        <meta
          name='description'
          content='Personal blog website where I\"ll talk about tech, programming and more.'
        />
      </Helmet>
      <div className='App'>
        <PageLayout />
        <Router>
          <NotFound default />
          <PostList path='/' />
          <PostList path='/tutorials' category={'6075cbce14ec542bb8a7f22e'} categoryTitle={'Tutorials'} />
          <PostList path='/lifestyle' category={'6075cbe514ec542bb8a7f22f'} categoryTitle={'Lifestyle'}  />
          <PostList path='/inspiration' category={'6075cbfb14ec542bb8a7f230'} categoryTitle={'Inspiration'}  />
          <PostList path='/stories' category={'6075cc0b14ec542bb8a7f231'} categoryTitle={'Stories'}  />
          <DetailedPost path='/detail/:postSlug' />
        </Router>
      </div>
    </>
  )
}

export default App
