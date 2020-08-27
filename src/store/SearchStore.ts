import { observable, action, computed, reaction } from "mobx"
import { createContext } from "react"

export interface SearchResult {
  pageId?: string;
  title: string;
  snipped: string;
}

class SearchStore {
  constructor() {
    reaction(() => this.searchResults, _ => console.log(this.searchResults.length))
  }

  @observable searchResults: SearchResult[] = [];

  @action addResults = (results: SearchResult[]) => {
    this.searchResults = results;
  };

  @computed get results() {
    return this.searchResults;
  };
}

export default createContext(new SearchStore())
