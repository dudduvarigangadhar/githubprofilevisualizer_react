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
                  <li>
                    <button type="button" className="nav-button">
                      Home{' '}
                    </button>
                  </li>
                </Link>
                <Link to="/repositories" className="list-item-link">
                  <li>
                    <button type="button" className="nav-button">
                      Repositories
                    </button>
                  </li>
                </Link>
                <Link to="/analysis" className="list-item-link">
                  <li>
                    <button type="button" className="nav-button">
                      Analysis
                    </button>
                  </li>
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
                <li className="home">
                  <button type="button" className="nav-button">
                    Home
                  </button>
                </li>
              </Link>
              <Link to="/repositories" className="list-item-link">
                <li className="repository">
                  <button type="button" className="nav-button">
                    Repositories
                  </button>
                </li>
              </Link>
              <Link to="/analysis" className="list-item-link">
                <li className="analysis">
                  <button type="button" className="nav-button">
                    Analysis
                  </button>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header
