import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Alert02 from "./components/Alert02";
import Button01 from "./components/Button01";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <Alert alertText="Error that will not help you :D"></Alert>
      {alertVisible && (
        <Alert02 onClose={() => setAlertVisibility(false)}>
          Hello how are you?
        </Alert02>
      )}
      <Button01
        BtnText="click me pls"
        onClick={() => setAlertVisibility(true)}
      ></Button01>
    </div>
  );
}

export default App;
