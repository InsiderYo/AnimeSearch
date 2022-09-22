const React = require('react');

module.exports = function Layout({ children, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{title}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
          crossOrigin="anonymous"
        />
        <script defer src="/js/publicScript.js" />
        <script defer src="/js/photo.js" />
        <script defer src="js/anime.js" />
        <script defer src="js/loginForm.js" />
        <script defer src="js/main.js" />
        <script
          src="https://kit.fontawesome.com/55a9ffd6d9.js"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/css/publicStyles.css" />
        <link rel="stylesheet" href="/css/logo.css" />
        <link rel="stylesheet" href="/css/login.css" />
        <link rel="stylesheet" href="/css/anime.css" />
        <link rel="stylesheet" href="/slick/slick.css" />
        <link rel="stylesheet" href="/slick/slick-theme.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" />
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo+Play:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="root">
          <header>
            {/* <nav className="navbar navbar-expand-lg">
              <div className="container-fluid ">
                <a className="nav-link" href="/">
                  <i className="fa-solid fa-icons"></i>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse text-light"
                  id="navbarNav"
                >
                  <ul className="navbar-nav">
                    {username ? (
                      <>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            aria-current="page"
                            href="/search"
                          >
                            Search
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link profile">{username}</a>
                        </li>
                        <li className="nav-item position-absolute top-0 end-0">
                          <a className="nav-link" href="/user/logout">
                            Logout
                          </a>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="nav-item">
                          <a className="nav-link" href="/user/login">
                            <i className="fa-solid fa-right-to-bracket" />
                            SIGN IN
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/user/register">
                            <i className="fa-solid fa-right-to-bracket" />
                            REGISTER
                          </a>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </nav> */}
          </header>
          {children}
        </div>
      </body>
    </html>
  );
};
