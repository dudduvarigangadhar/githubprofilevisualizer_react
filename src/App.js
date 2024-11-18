import {Switch, Route, Redirect} from 'react-router-dom'
import {useState} from 'react'
import AnalysisContainer from './components/AnalysisContainer'
// import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'

import Repository from './components/Repository'
import './App.css'
import ProfileContext from './ProfileContext'
import RepoItemDetailsContainer from './components/RepoItemDetailsContainer'

const App = () => {
  const [username, setUsername] = useState('')
  const [repoName, setRepoName] = useState('')

  const changeRepoName = newRepoName => {
    setRepoName(newRepoName)
  }

  const changeProfileName = newUsername => {
    setUsername(newUsername)
  }

  return (
    <ProfileContext.Provider
      value={{username, changeProfileName, repoName, changeRepoName}}
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/repositories" component={Repository} />

        <Route
          exact
          path="/repositories/:repoName"
          component={RepoItemDetailsContainer}
        />
        <Route exact path="/analysis" component={AnalysisContainer} />
        <Route exact path="/notfound" component={NotFound} />
        <Redirect to="/notfound" />
      </Switch>
    </ProfileContext.Provider>
  )
}
export default App
