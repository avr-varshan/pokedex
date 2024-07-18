"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import PokemonPreview from "./PokemonPreview";
import Image from "next/image";
import { Search } from "lucide-react";


interface PokemonGridProps {
    pokemonList: any,
}

export function PokemonGrid({pokemonList}: PokemonGridProps) {
  const [searchText, setSearchText] = useState("");
  console.log(pokemonList);

  //filter text
  const searchFilter = (pokemon: any) => {
    return pokemonList.filter(
        (pokemon: any) => pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    )
  }

  //save the filtered array of objects
  const filteredPokemonList = searchFilter(pokemonList);

  return (
    <>
      <div>
        <Image 
          src="/search.png"
          alt="search-text"
          width={600}
          height={100}
          className="py-2"
        />
        <div className="flex items-center justify-center py-6">
      <div className="relative w-full max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-6 w-6 text-primary" />
        </div>
        <Input
          type="text"
          value={searchText}
          id="pokemonName"
          autoComplete="off"
          placeholder="Pokemon name"
          onChange={(e) => setSearchText(e.target.value)}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:border-primary sm:text-sm"
        />
      </div>
    </div>
      </div>

      <Image 
          src="/collection.png"
          alt="search-text"
          width={300}
          height={100}
          className="py-2"
        />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 px-4 lg:px-8">
      {filteredPokemonList.map((pokemon: any) => (
        <PokemonPreview key={pokemon.name} name={pokemon.name} />
      ))}
    </div>
    </>
  );
}
