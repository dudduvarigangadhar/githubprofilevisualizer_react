import {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import ProfileContext from '../../ProfileContext/index'

import './index.css'
import Languages from '../Languages'

const Repository = () => {
  const [repos, setRepos] = useState([])
  const {username, changeRepoName} = useContext(ProfileContext)

  useEffect(() => {
    const fetchRepos = async () => {
      const options = {
        method: 'GET',
      }
      // api url
      const response = await fetch(apiUrl, options)
      let updatedData = null
      if (response.ok === true) {
        const fetchedData = await response.json()
        console.log(fetchedData)
        updatedData = fetchedData.map(eachItem => ({
          name: eachItem.name,
          languages: eachItem.languages.map(eachLanguage => ({
            name: eachLanguage.name,
            value: eachLanguage.value,
            id: eachLanguage.value,
          })),
          forks: eachItem.forks,
          forksCount: eachItem.forks_count,
          forksUrl: eachItem.forks_url,
          id: eachItem.id,
          description: eachItem.description,
          stargazersCount: eachItem.stargazers_count,
          stargazersUrl: eachItem.stargazers_url,
        }))

        setRepos(updatedData)
      }
    }
    fetchRepos()
  }, [username])

  return (
    <div className="repo-bg-container">
      <Header />
      <div>
        <h1 className="repo-main-heading">Repositories</h1>
        <ul>
          {repos.map(eachItem => (
            <Link
              to={`/repositories/${eachItem.name}`}
              key={eachItem.id}
              className="repo-list-item-container"
            >
              <li className="repos-list-item">
                <h1 className="repo-heading">{eachItem.name}</h1>
                <p className="repo-description">{eachItem.description}</p>
                <div className="languages-list">
                  {eachItem.languages.map(language => (
                    <Languages
                      key={language.value}
                      languageDetails={language}
                    />
                  ))}
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Repository
