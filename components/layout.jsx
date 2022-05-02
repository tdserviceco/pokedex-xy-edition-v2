// components/layout.js

import Bottom from './bottom';
import Head from 'next/head';
export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicons/android-chrome-512x512.png" />
        <link rel="icon" type="image/png" sizes="70x70" href="/favicons/mstile-70x70.png" />
        <link rel="icon" type="image/png" sizes="150x150" href="/favicons/mstile-150x150.png" />
        <link rel="icon" type="image/png" sizes="310x150" href="/favicons/mstile-310x150.png" />
        <link rel="icon" type="image/png" sizes="310x310" href="/favicons/mstile-310x310.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className='container'>
        {children}
      </main>
      <Bottom />
    </>
  )
}