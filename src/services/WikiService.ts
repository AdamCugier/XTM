const url = process.env.REACT_APP_URL;
const WikiService = {
  getResults(searchPhrase: string) {
    const fetchedData = fetch(`${url}?action=query&list=search&origin=*&format=json&srsearch=%22${searchPhrase}%22&srlimit=10`)
      .then(response => response.json());

    return fetchedData;
  }
};

export default WikiService
