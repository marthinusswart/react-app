import ListGroup from "./components/ListGroup";
import Message from "./components/Message";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <div>
        <Message />
      </div>
      <div>
        <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
      </div>
    </div>
  );
}

export default App;
