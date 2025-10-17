import logo from './logo.svg';
import "./App.css";
import { Flex, Text, Button } from "@radix-ui/themes";
import PopoverDemo from './demo/PopoverDemo';
import AccordionDemo from './Accordion/AccordionDemo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Flex direction="column" gap="2">
          <Text>Hello from Radix Themes :)</Text>
          <Button>Let's go</Button>
        
          <PopoverDemo />        
          <AccordionDemo />
        </Flex>
      </header>      
    </div>
  );
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
