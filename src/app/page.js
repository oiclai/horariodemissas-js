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
                <p>Desenvolvido por <a href="https://www.linkedin.com/in/mariana-dos-santos-sarinho-7a15a52bb/" target="_blank" rel="noopener noreferrer">@MarianaSarinho</a>, <a href="https://www.linkedin.com/in/maria-clara-almeida-a39768300/" target="_blank" rel="noopener noreferrer">@MariaClara</a>,
                <a href="https://www.linkedin.com/in/clara-nunes-de-alcantara/" target="_blank" rel="noopener noreferrer">@ClaraAlcantara</a></p>
            </footer>
        </div>
    </SearchProvider>
);

export default App;