import logo from './logo.svg';
import './App.css';

function App() {
  return (
        <div className="wrapper">
          <h1>Best Friend</h1>
          <h3>Pet Vaccination Card</h3>
          <img src="Images/LogIn.png" alt="login" />
          <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" /><br /><br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" /><br /><br />
            <input type="checkbox" id="keep-logged-in" name="keep-logged-in" />
            <label htmlFor="keep-logged-in">Keep me logged in</label><br /><br />
          </form>
          <button type="submit">Log In</button><br /><br />
          <p className="or">--- Continue with: ---</p>
          <div className="icons">
            <i className="fab fa-google"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-facebook"></i>
          </div><br />
          <div className="not_member">
            <a href="#">Forgot your password?</a><br /><br />
            <p>Dont have an account? <a href="#">Join us here</a></p>
          </div>
        </div>
  );
}

export default App;
