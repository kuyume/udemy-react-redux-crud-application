
function App() {
  return (
    <>
      <label htmlFor="bar">bar</label>
      <input id="bar" type="text" onChange={() => {console.log("changed.")}} />
    </>
  )
  ;
}

export default App;
