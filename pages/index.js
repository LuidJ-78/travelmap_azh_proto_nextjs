import Head from 'next/head';
import Header from '../components/Header';
import MainBody from '../components/MainBody';
import Map from '../components/Map';

export default function Home() {
  return (
    <>
      <Head>
        <title>Travel Map Azgharie Airlines</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://unpkg.com/leaflet/dist/leaflet.css" rel="stylesheet" />
      </Head>
      <Header />
      <MainBody />
      <Map />
    </>
  );
}
