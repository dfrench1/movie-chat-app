import Home from './pages/home'
import MovieList from './pages/movieList'
import Chat from './pages/chat'

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/movieList',
    component: MovieList,
  },
  {
    path: '/chat',
    component: Chat,
  }
]

export default routes