const React = require('react');
const Layout = require('./Layout');

function Search({ user }) {
  return (
    <Layout username={user}>
      <div>
        <img className="profile" src="../img/profile.png" />
        <img className="sword" src="../img/sword.png" />
        <img className="suske" src="../img/suske.png" />
        <img className="symbol" src="../img/symbols.png" />
        <img className="surik" src="../img/surik4.png" />
      </div>
      <nav className="navBar">
        <i className="fa-solid fa-user-ninja" />
        <div className="user">{user}</div>
        <i className="fa-solid fa-gears" />
        <div className="boxInfo">
          <div className="logout">LOGOUT</div>
          <div className="status">STATUS: Online</div>
          <div className="getMore">
            <span>GET</span>
            <span>MORE</span>
          </div>
          <div className="addFavor">
            <span>ADD</span>
            <span>FAVOR</span>
          </div>
          <div className="info">BUTTON INFORMATION BAR</div>
          <img className="stick1" src="../img/stick1.png" />
          <img className="stick3" src="../img/stick3.png" />
          <a href="/logout">
            <img className="stick2" src="../img/stick2.png" />
          </a>
        </div>
      </nav>
      <div className="searchbar">
        <form id="search_form" className="formAnime">
          <div className="">
            <div className="">
              <input
                name="search"
                id="search"
                type="text"
                className="inputAnime"
                value=""
              />
              <button className="btnSearch" id="clearButton" type="submit">
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </div>
            <span className="enter"></span>
          </div>
        </form>
      </div>
      <div id="search-results" className="search-results"></div>
    </Layout>
  );
}

module.exports = Search;
