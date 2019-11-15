import React from "react";
import {Route} from "react-router-dom";
import Header from "./components/Header.js";

import WelcomePage from "./components/WelcomePage";
import Characterslist from "./components/CharacterList";
import CharactersDetail from "./components/CharacterDetail";
import EpisodeDetail from "./components/EpisodeDetail";

export default function App() {
  return (
    <main>
      <Header />

      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/Characters" component={Characterslist} />
      <Route path="/Characters/:id" render={props => <CharactersDetail {...props} />} />
      <Route path="/Episode/:id" render={props => <EpisodeDetail {...props} />} />
    </main>
  );
}
