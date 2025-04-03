import './App.css'
import HookExam from './components/HookExam'
import Register from './components/Register'
import { Bulb } from './components/Bulb';
import { Count } from './components/Count';

function App() {

  //let light = "OFF"; 이런 식으로 일반 변수로 선언하면 값은 바뀌지만 값이 변할 때마다 리렌더링이 되지 않는다.

  return (
    <>
      <div>
        <Bulb/>
        <Count/>        
        <Register/>
        <HookExam/>
      </div>

    </>
  )
}

export default App
