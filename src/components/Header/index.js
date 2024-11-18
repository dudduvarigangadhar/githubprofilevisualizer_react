import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  state = {activeStatus: false}

  onClickMenu = () => {
    const {activeStatus} = this.state
    this.setState({activeStatus: !activeStatus})
  }

  render() {
    const {activeStatus} = this.state
    return (
      <div className="headerDivContainer">
        <div>
          <nav className="sm-sr-heading-container">
            <Link to="/" className="link-to-headingRoute">
              <h1 className="headingRoute"> Github Profile Visualizer</h1>
            </Link>
            <div className="menu-container">
              <button
                type="button"
                className="menu-button"
                onClick={this.onClickMenu}
              >
                <img
                  src="https://res.cloudinary.com/diqwk5cdp/image/upload/v1731912175/menu_bdafjs.png"
                  alt="menu"
                />
              </button>
            </div>
          </nav>
          {activeStatus && (
            <div className="menu-list-container">
              <ul className="list-container">
                <Link to="/" className="list-item-link">
                  <li className="home">Home </li>
                </Link>
                <Link to="/repositories" className="list-item-link">
                  <li className="repository">Repositories</li>
                </Link>
                <Link to="/analysis" className="list-item-link">
                  <li className="">Analysis</li>
                </Link>
              </ul>
            </div>
          )}
        </div>
        <div className="lg-nav-items">
          <nav className="lg-nav-items-container">
            <Link to="/" className="link-to-headingRoute">
              <h1 className="headingRoute"> Github Profile Visualizer</h1>
            </Link>
            <ul className="categories">
              <Link to="/" className="list-item-link">
                <li className="home">Home</li>
              </Link>
              <Link to="/repositories" className="list-item-link">
                <li className="repository">Repositories</li>
              </Link>
              <Link to="/analysis" className="list-item-link">
                <li className="analysis">Analysis</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header
