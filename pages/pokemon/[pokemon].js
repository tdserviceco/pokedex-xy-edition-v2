import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Pokeman.module.css';
export default function Pokemon({ pokeman }) {

  const ConvertToMetric = ({ convert }) => {
    return `${convert / 10}`
  }

  const ContvertToImperial = ({ convert, type }) => {
    let metric = convert / 10;
    let imperial;
    if (type === 'height') {
      imperial = Math.round(metric * 39.3700787);
    }
    else {
      imperial = Math.round(metric * 2.2046);
    }
    return imperial
  }

  return (
    <div className={styles.pokeman}>
      <Head>
        <title>Nr: {pokeman.id} - {pokeman.name}</title>
        <link rel="apple-touch-icon" sizes="180x180" href={pokeman.image} />
        <link rel="icon" type="image/png" sizes="32x32" href={pokeman.image} />
        <link rel="icon" type="image/png" sizes="16x16" href={pokeman.image} />
        <link rel="icon" type="image/png" sizes="192x192" href={pokeman.image} />
        <link rel="icon" type="image/png" sizes="512x512" href={pokeman.image} />
        <link rel="icon" type="image/png" sizes="70x70" href={pokeman.image} />
        <link rel="icon" type="image/png" sizes="150x150" href={pokeman.image} />
        <link rel="icon" type="image/png" sizes="310x150" href={pokeman.image} />
        <link rel="icon" type="image/png" sizes="310x310" href={pokeman.image} />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className={styles.image}>
        <Image
          quality={100}
          objectFit={'contain'}
          objectPosition={"50% 50%"}
          src={pokeman.image}
          alt={pokeman.name}
          layout={'fill'}
          priority />
      </div>
      <div className={styles.pokemonContent}>
        <h1 className={styles.title}>
          {pokeman.name}
        </h1>

        <div className={styles.stats}>
          <ul>
            <li>
              Weight: <ConvertToMetric convert={pokeman.weight} /> kg / <ContvertToImperial type={'weight'} convert={pokeman.weight} /> lbs
            </li>
            <li >
              Height: <ConvertToMetric convert={pokeman.height} /> m / <ContvertToImperial type={'height'} convert={pokeman.height} /> In
            </li>
            <li>
              <ul>
                {pokeman.types.length > 1 ? <span className='types'>Types: </span> : <span className='type'>Type: </span>}
                <div className='skills'>
                  {pokeman.types.map((style, index) =>
                    <li className={style.type.name} key={index}>{style.type.name}</li>
                  )}
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <Link href="/">
        <a className={styles.link}>Home</a>
      </Link>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const pokemon = params.pokemon;
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const pokeman = await res.json();
    const paddedIndex = (`00${pokeman.id}`).slice(-3); //001 or 100
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
    pokeman.image = image // including in the image
    return {
      props: { pokeman }
    }
  }
  catch (err) {
    console.error(err);
  }
}
