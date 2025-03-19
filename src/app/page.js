import "./styles/globals.css";
import React from "react";
import { SearchProvider } from "@/context/searchstate";
import SearchBar from "@/components/searchbar";
import SearchResults from "@/components/searchresults";

const App = () => (
    <SearchProvider>
        <div id="main-app-component">
            <header>
                <h1>HORÁRIOS DE MISSAS</h1>
                <p>Encontre os horários das missas em João Pessoa de forma fácil e rápida!</p>
            </header>

            <main>
                <div className="search-container">
                    <SearchBar />
                </div>
                <SearchResults />
            </main>
            
            <footer>
                <p>Compartilhe a proposta do site com seus amigos!</p>
                <p>Todos merecem se manter informados quanto ao horário das missas.</p>
                <p>Desenvolvido por <a href="https://github.com/MarianaSarinho" target="_blank" rel="noopener noreferrer">@MarianaSarinho</a>, <a href="https://github.com/MariaClara" target="_blank" rel="noopener noreferrer">@MariaClara</a>, <a href="https://github.com/ClaraAlcantara" target="_blank" rel="noopener noreferrer">@ClaraAlcantara</a></p>
            </footer>
        </div>
    </SearchProvider>
);

export default App;