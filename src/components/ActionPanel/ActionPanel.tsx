import React, { useContext, useState } from 'react';
import { ActionButton, Container, Input } from "../style";
import WikiService from "../../services/WikiService";
import SearchStore from "../../store/SearchStore";
import { observer } from "mobx-react-lite";

const ActionPanel: React.FC = () => {

  const [searchPhrase, setSearchPhrase] = useState("");
  const [replacePhrase, setReplacePhrase] = useState("");

  const searchStore = useContext(SearchStore);
  const { addResults, searchResults } = searchStore;

  const getData = (searchPhrase: string) => {
    WikiService.getResults(searchPhrase).then(result => {
      const data = result.query.search.map((element: any) => ({
        pageid: element.pageid,
        snippet: element.snippet,
        title: element.title
      }));
      addResults(data);
    });
  };

  const replaceAll = () => {
    const allHighlighted = Array.from(document.getElementsByClassName('searchmatch'));
    if (allHighlighted.length > 0) {
      allHighlighted.forEach(highlight => {
        highlight.innerHTML = replacePhrase;
        highlight.classList.remove('searchmatch');
      })
    } else {
      alert('Can not find phrase to replace')
    }
  };

  const replaceFirst = () => {
    const firstHighlight = document.querySelector('.searchmatch');
    if (firstHighlight) {
      firstHighlight.innerHTML = replacePhrase;
      firstHighlight.classList.remove('searchmatch');
    } else {
      alert('Can not find phrase to replace')
    }
  };

  return (
    <Container>
      <div>
        <Input.Container>
          <Input.Text>Search phrase:</Input.Text>
          <Input.Field onChange={e => setSearchPhrase(e.target.value)} type="text"/>
          <ActionButton disabled={searchPhrase.length === 0}
                        onClick={() => getData(searchPhrase)}>Search</ActionButton>
        </Input.Container>
        <Input.Container>
          <Input.Text>Replace with:</Input.Text>
          <Input.Field disabled={searchResults.length === 0} type="text"
                       onChange={e => setReplacePhrase(e.target.value)}/>
          <ActionButton disabled={replacePhrase.length === 0}
                        onClick={() => replaceFirst()}>Replace</ActionButton>
          <ActionButton disabled={replacePhrase.length === 0}
                        onClick={() => replaceAll()}>Replace All</ActionButton>
        </Input.Container>
      </div>
    </Container>
  );
};
export default observer(ActionPanel);
