import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />

      <TodoList >
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList >

      <CreateTodoItem/>

    </div>
  );
}

export default App;
