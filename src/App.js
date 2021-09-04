import './App.css';
import Row from './components/Row';
import requests from './service/request';

function App() {
  return (
    <div className="App">
      <h1>NETFLIX</h1>
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="TOP RATED" fetchUrl={requests.fetchtopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMATIC MOVIES" fetchUrl={requests.fetchRomaticMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
