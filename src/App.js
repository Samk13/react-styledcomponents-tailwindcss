import logo from './logo.svg';
import StyledForm from './styles';

function App() {
  return (
    <div className="App">
      <StyledForm>
        <form>
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button>Sign In</button>
        </form>
      </StyledForm>
    </div>
  );
}

export default App;
