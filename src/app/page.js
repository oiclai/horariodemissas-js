// /src/App.jsx
import "./styles/globals.css";
import React from "react";
import { SearchProvider } from "@/context/searchstate";
import SearchBar from "@/components/searchbar";
import SearchResults from "@/components/searchresults";

const App = () => (
    <SearchProvider>
        <div>
            <h1>Busca de Igrejas</h1>
            <SearchBar />
            <SearchResults />
        </div>
    </SearchProvider>
);

export default App;
