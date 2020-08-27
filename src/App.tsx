import React from 'react';
import { Container, Divider } from "./components/style";
import ActionPanel from "./components/ActionPanel/ActionPanel";
import SearchList from "./components/SearchList/SearchList";

const App: React.FC = () => {
  return (
    <Container className="App">
      <ActionPanel/>
      <Divider/>
      <SearchList/>
    </Container>
  );
}

export default App;
