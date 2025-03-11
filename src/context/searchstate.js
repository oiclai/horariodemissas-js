"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import supabase from "../services/supabase";

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);
// gerenciamento de estatdos (requisito completo 1)
export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [missas, setMissas] = useState([]);
    const [filteredMissas, setFilteredMissas] = useState([]);

    // filtragem com expressões regulares (requisito completo 2)
    const filterMissas = (missas, query) => {
        const regExp = new RegExp(query, "i"); // 'i' para tornar a busca 'case-insensitive'
        return missas.filter(
            (missa) =>
                regExp.test(missa.local) ||
                regExp.test(missa.zona) ||
                regExp.test(missa.horario_time) ||
                regExp.test(missa.dia_semana) ||
                regExp.test(missa.turno) ||
                regExp.test(missa.bairro)
        );
    };

    // busca no supabase
    useEffect(() => {
        const fetchMissas = async () => {
            const { data, error } = await supabase
                .from("horarios") // tabela do banco
                .select("*");

            if (error) {
                console.error("Erro ao buscar igrejas:", error); // colocar aviso tipo http
                return;
            }

            setMissas(data);
        };

        fetchMissas();
    }, []);

    // filtrar os resultados -> quando a pesquisa 'mudar'
    useEffect(() => {
        if (searchQuery) {
            const results = filterMissas(missas, searchQuery);
            setFilteredMissas(results);
        } else {
            setFilteredMissas([]);
        }
    }, [searchQuery, missas]);

    return (
        <SearchContext.Provider
            value={{ searchQuery, setSearchQuery, filteredMissas }}
        >
            {children}
        </SearchContext.Provider>
    );
};
