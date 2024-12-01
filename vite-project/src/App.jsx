import './App.css'
import LoginConditional from './LoginConditional'
import Fruit from './Fruit';
import Book from './Book';

function App() {
  const hasMessage = true;
  const message = "";

  return (
    <>
      <h1>1.상태 값에 의한 출력 결과</h1>
      {LoginConditional("admin")}

      {hasMessage && <h2>You have new messages.</h2>}
      {message && <p>message = {message}</p>}

      <p>
        message: {message ?? <em>No message</em>}
      </p>
      <p>
        message: {message || <em>Empty</em>}
      </p>

      <h1>2. List</h1>
      {[1,2,"a", "b", true, false]}
      <br />

      {[
        <button>button1</button>,
        <button>button2</button>
      ]}

      <Fruit />

      <Book />

    </>
  )
}

export default App
