import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css'
export default function Home({ pokemon }) {
  return (
    <div className={styles.pokedex}>
      {pokemon.map((pokeman, index) =>
        <div className='pokemon' key={index}>
          <Link href={`/pokemon/${pokeman.name}`}>
            <a className={styles.content}>
              <div className={styles.pokemonImage}>
                <Image
                  quality={100}
                  objectFit={'cover'}
                  objectPosition={'top left'}
                  src={pokeman.image}
                  alt={pokeman.name}
                  layout={'responsive'}
                  width={240}
                  height={240}
                />
              </div>
            </a>
          </Link>
        </div>
      )}
    </div>
  )
}

export async function getStaticProps(ctx) {

  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const { results } = await res.json();
    const pokemon = results.map((result, index) => {
      const paddedIndex = ("00" + (index + 1)).slice(-3) //001 or 100;
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
      /**we put image next to result */
      return {
        ...result,
        image
      }
    })

    return {
      props: { pokemon }
    }
  }
  catch (err) {
    console.error(err)
  }
}
