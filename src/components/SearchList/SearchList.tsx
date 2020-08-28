import React, { useContext } from 'react';
import { Container, List } from "../style";
import { observer } from "mobx-react-lite";
import SearchStore from "../../store/SearchStore";

const SearchList: React.FC = () => {

  const searchStore = useContext(SearchStore);
  const { searchResults } = searchStore;

  const createHTML = (result: any) => {
    return {
      __html: result.snippet
    }
  };

  return (
    <Container>
      <List.H1>Search Results:</List.H1>
      <List.Container>
        {searchResults.map(result => {
          return <List.Item key={result.pageid}>
            <List.Title>{result.title}</List.Title>
            <List.Snippet dangerouslySetInnerHTML={createHTML(result)}></List.Snippet>
          </List.Item>
        })}
      </List.Container>
    </Container>
  );
};

export default observer(SearchList);
