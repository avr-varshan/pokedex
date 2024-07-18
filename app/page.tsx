import { PokemonGrid } from "@/components/PokemonGrid";
import { getPokemonList } from "@/lib/pokemonApi";

export default async function Home() {

  const pokemonList = await getPokemonList();

  return (
    <PokemonGrid pokemonList={pokemonList}/>
  );
}
