// pages/index.tsx
import Head from "next/head";
import Image from "next/image";
import Card from "../components/common/Card";
import Pill from "../components/ui/Pill";
import { SAMPLE_LISTINGS, HERO_BG, FILTERS } from "../constants";

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>

      <main className="flex flex-col">

        {/* Hero Section */}
        <section className="relative w-full h-[500px]">
          <Image
            src={HERO_BG}
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            className="brightness-75"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Find your favorite place here!
            </h1>
            <p className="text-lg sm:text-2xl text-white">
              The best prices for over 2 million properties worldwide.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="mt-8 px-4 sm:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {FILTERS.map((filter) => (
              <Pill key={filter} label={filter} />
            ))}
          </div>
        </section>

        {/* Listing Section */}
        <section className="mt-10 px-4 sm:px-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Explore Amazing Places
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {SAMPLE_LISTINGS.map((listing, index) => (
              <Card key={index} {...listing} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
