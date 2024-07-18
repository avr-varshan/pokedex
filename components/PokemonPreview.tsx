import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { getPokemon } from "@/lib/pokemonApi";

interface PokemonType {
  slot: number;
  type: {
    name: string;
  };
}

interface PokemonSprites {
  front_default: string;
}

interface PokemonObject {
  sprites: PokemonSprites;
  types: PokemonType[];
}

interface PokemonCardProps {
  name: string;
}

const PokemonPreview = ({ name }: PokemonCardProps) => {
  const [pokemonObject, setPokemonObject] = useState<PokemonObject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      const result = await getPokemon(name);
      setPokemonObject(result);
      setLoading(false);
    };

    fetchPokemon();
  }, [name]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (!pokemonObject) {
    return null;
  }

  const typeColors = {
    bug: 'bg-bug hover:bg-bug-light',
    dark: 'bg-dark hover:bg-dark-light',
    dragon: 'bg-dragon hover:bg-dragon-light',
    electric: 'bg-electric hover:bg-electric-light',
    fairy: 'bg-fairy hover:bg-fairy-light',
    fighting: 'bg-fighting hover:bg-fighting-light',
    fire: 'bg-fire hover:bg-fire-light',
    flying: 'bg-flying hover:bg-flying-light',
    ghost: 'bg-ghost hover:bg-ghost-light',
    normal: 'bg-normal hover:bg-normal-light',
    grass: 'bg-grass hover:bg-grass-light',
    ground: 'bg-ground hover:bg-ground-light',
    ice: 'bg-ice hover:bg-ice-light',
    poison: 'bg-poison hover:bg-poison-light',
    psychic: 'bg-psychic hover:bg-psychic-light',
    rock: 'bg-rock hover:bg-rock-light',
    steel: 'bg-steel hover:bg-steel-light',
    water: 'bg-water hover:bg-water-light'
  };

  type PokemonTypeName = keyof typeof typeColors;
  const firstType = pokemonObject.types[0].type.name as PokemonTypeName;

  return (
    <Link
      href={name}
      className={`group block rounded-lg border border-gray-200 p-5 m-3 dark:border-gray-500 transition-colors ${typeColors[firstType]} bg-opacity-50 hover:${typeColors[firstType]}-light`}
      key={name + "Card"}
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h2>
        <div className="flex justify-center mb-2">
          <Image
            src={pokemonObject.sprites.front_default}
            alt={name}
            width={100}
            height={100}
          />
        </div>
        <div>
          {pokemonObject.types.map((typeEntry) => (
            <span 
              key={typeEntry.slot} 
              className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 ${typeColors[typeEntry.type.name as PokemonTypeName]}`}
            >
              {typeEntry.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PokemonPreview;
