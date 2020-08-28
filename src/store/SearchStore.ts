import { observable, action } from "mobx"
import { createContext } from "react"

export interface SearchResult {
  pageid?: number;
  title: string;
  snippet: string;
}

class SearchStore {
  @observable searchResults: SearchResult[] = [];

  @action addResults = (results: SearchResult[]) => {
    this.searchResults = results;
  };
}

export default createContext(new SearchStore())
