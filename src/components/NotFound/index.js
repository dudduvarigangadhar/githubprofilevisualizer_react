const NotFound = () => (
  <div className="page-not-found-container">
    <>
      <img
        src="https://res.cloudinary.com/diqwk5cdp/image/upload/v1732070791/Group_7519_fwq39j.png"
        alt="pageNotFound"
        className="page-not-found"
      />
      <h1 className="page-not-found-heading">PAGE NOT FOUND</h1>
      <p className="page-not-found-description">
        {`we're sorry, the page you requested could not be found`}
      </p>
      <p className="homepage-redirection-description">
        Please go back to the homepage
      </p>
      <button type="button" className="go-to-home-page-button">
        Go to Home
      </button>
    </>
  </div>
)

export default NotFound
