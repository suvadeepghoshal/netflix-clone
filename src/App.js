import './App.css';
import Row from './components/Row';
import requests from './service/request';

function App() {
  return (
    <div className="App">
      <h1>NETFLIX</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} isLargeRow={false} />
      <Row title="TOP RATED" fetchUrl={requests.fetchtopRated} isLargeRow={false} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} isLargeRow={false} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} isLargeRow={false} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} isLargeRow={false} />
      <Row title="ROMATIC MOVIES" fetchUrl={requests.fetchRomaticMovies} isLargeRow={false} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} isLargeRow={false} />
    </div>
  );
}

export default App;
