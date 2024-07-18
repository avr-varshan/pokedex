import { getPokemon } from "@/lib/pokemonApi";
import Image from "next/image";
import { PokemonImage } from "@/components/PokemonImage";
import { Progress } from "@/components/ui/progress";

export default async function PokemonPage({ params }: { params: { pokemonName: string } }) {
    const { pokemonName } = params;

    const pokemonObject = await getPokemon(pokemonName);


    const nameStyle = {
        textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000'
    };

    const firstType = pokemonObject.types[0].type.name;

    return (
        <div className={`flex flex-col items-center justify-center p-4 bg-${firstType} rounded-xl`}>
            <div className="flex items-center my-1 text-white" style={nameStyle}>
                <h1 className="text-4xl font-bold pt-4" >
                    {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
                </h1>
            </div>
            <div className="m-4 relative w-[300px] h-[300px]">
                <PokemonImage 
                    image={pokemonObject.sprites.other['official-artwork'].front_default}
                    name={pokemonName}
                />
            </div>
            <h3 className="text-white">Weight: {pokemonObject.weight}</h3>
            <div className="w-[500px] p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-4">
                {pokemonObject.stats.map((statObject: any) => {
                    const statName = statObject.stat.name;
                    const statValue = statObject.base_stat;

                    return (
                        <div className="flex items-center my-1" key={statName}>
                            <h3 className="p-1 w-1/4 text-gray-900 dark:text-white">
                                {statName.charAt(0).toUpperCase() + statName.slice(1)}:
                            </h3>
                            <span className="p-1 w-1/4 text-right text-gray-900 dark:text-white">
                                {statValue}
                            </span>
                            <Progress className="w-2/4 mx-1" value={statValue} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
