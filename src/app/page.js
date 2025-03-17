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
                <p>Desenvolvido por @MarianaSarinho @MariaClara @ClaraAlcantara</p>
            </footer>
        </div>
    </SearchProvider>
);

export default App;
