import './App.css';

function App() {

  let post = '강남 우동 맛집';

  return (
    <div className="App">
       <div>
           <h4 style={{fontSize:18}} className="black-nav">블로그</h4>
       </div>
       <h4> {post} </h4>
    </div>
  );
}

export default App;
