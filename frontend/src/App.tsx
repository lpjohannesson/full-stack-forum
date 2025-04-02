import Header from "./components/Header";
import ListPost from "./components/ListPost";

function App() {
  return (
    <>
      <Header />
      <div className="p-4 flex flex-col gap-2">
        <ListPost />
        <ListPost />
        <ListPost />
      </div>
    </>
  )
}

export default App;
