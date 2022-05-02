import Layout from '../components/layout'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout title="Pokedex">
      <Component {...pageProps} />
    </Layout>
  )
}