const React = require('react');
const Layout = require('./Layout');

function Main({ user }) {
  return (
    <Layout username={user}>
      <div className="pole">
        {/* <div className="eye1Div">
          <img className="eye1" src="./img/eye1.gif" alt="" />
        </div> */}
        <div className="eye2Div">
          <img className="eye2" src="./img/eye2.gif" alt="" />
        </div>
        <div className="eyeFullDiv">
          <img className="eyeFull" src="./img/eyefull7.png" alt="" />
        </div>
        <div className="bloodDiv">
          <img className="blood" src="./img/blood.png" alt="" />
        </div>
      </div>
      <div class="container" id="container">
        <div class="form-container sign-up-container">
          <form action="/red" class="formSignUp" method="POST">
            <h1 class="hh1">Create Account</h1>
            <input
            placeholder="USERNAME"
              type="text"
              className=""
              id="exampleInputUsername"
              name="username"
            />
            <input
            placeholder="EMAIL"
              type="email"
              className=""
              id="exampleInputPassword1"
              name="email"
            />
            <input
            placeholder="PASSWORD"
              type="password"
              className=""
              id="exampleInputPassword1"
              name="password"
            />
            <button className='buttonLog'>Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form action="/log" class="formSignIn" method="POST">
            <h1 class="hh1">Sign in</h1>
            <input
            placeholder="EMAIL"
              type="email"
              className=""
              id="exampleInputPassword1"
              name="email"
            />
            <input
            placeholder="PASSWORD"
              type="password"
              className=""
              id="exampleInputPassword2"
              name="password"
            />
            <a class="aa" href="#">Forgot your password? I can`t help you</a>
            <button className='buttonLog'>Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1 class="h1">Choose your jutsu!</h1>
              <p class="pp">
                To keep connected with us please login with your personal info
              </p>
              <button class="ghost buttonLog" id="signIn">
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Ninja!</h1>
              <p class="pp">Enter your personal details and start journey with us</p>
              <button class="ghost buttonLog" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <link rel="stylesheet" href="/css/anime.css" />
    </Layout>
  );
}

module.exports = Main;
