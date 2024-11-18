import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LinearChart from '../LinearChart'
import LanguageRepoCountPie from '../LangRepoCountPie'
import LanguageCommitCountPie from '../LangCommitCountPie'
import RepoCommitCountPie from '../RepoCommitCountPie'
import './index.css'
import Header from '../Header'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Analysis extends Component {
  state = {apiStatus: apiConstants.initial, analysisData: {}}

  componentDidMount() {
    this.getAnalysisData()
  }

  getAnalysisData = async () => {
    // console.log(this.props)
    console.log('analysis data')
    this.setState({apiStatus: apiConstants.inProgress})
    const {username} = this.props
    // api url
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      //   const datasets: {
      //     label: 'Commits Per Quarter',
      //     // data: [0, 2, 6, 4, 8, 4, 2, 3, 2, 4, 2], // Example data points
      //     borderColor: '#56A6FF', // Line color
      //     backgroundColor: 'rgba(86, 166, 255, 0.2)', // Fill color
      //     pointBackgroundColor: '#56A6FF', // Point color
      //     pointBorderColor: '#56A6FF', // Point border
      //     pointRadius: 4, // Size of the points
      //     borderWidth: 2, // Thickness of the line
      //   }

      //   data = [...data, datasets]
      //   const updatedData = data
      this.setState({
        apiStatus: apiConstants.success,
        analysisData: data,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  analysisLoadingView = () => (
    <div className="analysis-loading-view">
      <div className="loader-container" data-testid="loader">
        <Loader type="TailSpin" color="#3B82F6" height={50} width={50} />
      </div>
    </div>
  )

  analysisSuccessView = () => {
    const {analysisData} = this.state
    // const {langRepoCount} = analysisData
    const analysisListLength = Object.keys(analysisData).length === 0

    const {
      user,
      quarterCommitCount,
      langRepoCount,
      langCommitCount,
      repoCommitCount,
    } = analysisData

    const {avatarUrl, login} = user

    const quarterCommitData = []
    const quarterCommitKeyNames = Object.keys(quarterCommitCount)
    quarterCommitKeyNames.forEach(keyName => {
      quarterCommitData.push({
        name: keyName,
        commits: quarterCommitCount[keyName],
      })
    })

    const quarterCommitSlicedData = quarterCommitData
      .sort(this.descendingSort)
      .slice(0, Object.keys(quarterCommitCount).length)
    // console.log(quarterCommitSlicedData)

    // const labels = Object.keys(langRepoCount)
    // const data = Object.values(langRepoCount)
    // console.log(labels, data)
    const langRepoData = []
    const langRepoKeyNames = Object.keys(langRepoCount)
    langRepoKeyNames.forEach(keyName => {
      langRepoData.push({name: keyName, value: langRepoCount[keyName]})
    })
    const langRepoSlicedData = langRepoData
      .sort(this.descendingSort)
      .slice(0, Object.keys(langRepoCount).length)
    // console.log(langRepoSlicedData)

    const langCommitData = []
    const langCommitKeyNames = Object.keys(langCommitCount)
    langCommitKeyNames.forEach(keyName => {
      langCommitData.push({name: keyName, value: langCommitCount[keyName]})
    })

    const langCommitSlicedData = langCommitData
      .sort(this.descendingSort)
      .slice(0, Object.keys(langCommitCount).length)

    const repoCommitData = []
    const repoCommitKeyNames = Object.keys(repoCommitCount)
    repoCommitKeyNames.forEach(keyName => {
      repoCommitData.push({name: keyName, value: repoCommitCount[keyName]})
    })
    const slicedData = repoCommitData.sort(this.descendingSort).slice(0, 10)

    return (
      <>
        <div>
          {analysisListLength ? (
            <div>
              <img src="" alt="no analysis" />
              <h1>No Analysis Data Found!</h1>
            </div>
          ) : (
            <div className="sm-analysis-div-container">
              <h1 className="analysis-main-heading">Analysis</h1>
              <div className="linear-chart-div-container">
                <div className="linear-chart-container">
                  <LinearChart quarterCommitCount={quarterCommitSlicedData} />
                </div>
              </div>
              <div className="language-piechart-container">
                <div className="lang-per-repo-container">
                  <h1 className="lang-per-repos-heading">Language Per Repos</h1>
                  <br />
                  <LanguageRepoCountPie langRepoCount={langRepoSlicedData} />
                </div>
                <div className="lang-per-commit-container">
                  <h1 className="lang-per-commit-heading">
                    Language Per Commits
                  </h1>
                  <br />
                  <LanguageCommitCountPie
                    langCommitCount={langCommitSlicedData}
                  />
                </div>
              </div>
              <div>
                <div>
                  <h1 className="commits-per-repo-heading">
                    Commits per Repo (Top 10)
                  </h1>
                  <br />
                  <div className="commits-per-repo-container">
                    <RepoCommitCountPie repoCommitCount={slicedData} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    )
  }

  analysisFailureView = () => {}

  renderAnalysisView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.inProgress:
        return this.analysisLoadingView()
      case apiConstants.success:
        return this.analysisSuccessView()
      case apiConstants.failure:
        return this.analysisFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="analysis-container">
        <Header />
        <div>{this.renderAnalysisView()}</div>
      </div>
    )
  }
}

export default Analysis
