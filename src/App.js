import "./App.css";
import codemasters from "../src/codemasters.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="body">
          <img src={codemasters} alt="codemasters" className="Logo" />
          <p className="signin">SIGN IN</p>
          <p className="text">
            {" "}
            Enter your credentials to access your account{" "}
          </p>
          <form className="form">
            <label className="label">
              Email
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter your email"
              />
            </label>
            <label className="label">
              Password
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Enter your password"
              />
            </label>
            <label>
              <input type="submit" className="submit" />
            </label>
          </form>
          <p className="reset">
            {" "}
            Forgot your password?
            <a href="www.codemasters.id" className="link">
              Reset Password
            </a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
