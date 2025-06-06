import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  const featuredPages = [
    { title: 'Best Kanna Drinks', slug: 'best-kanna-drinks' },
    { title: 'Best Non-Alcoholic Beers', slug: 'best-non-alcoholic-beers' },
    { title: 'Best Drinks for Sleep', slug: 'best-drinks-for-sleep' },
    { title: 'Best Alcohol-Free Wines', slug: 'best-alcohol-free-wines' },
    { title: 'Best Mocktails', slug: 'best-mocktails' },
    { title: 'Best Functional Beverages', slug: 'best-functional-beverages' },
  ];

  return (
    <Layout>
      <Head>
        <title>BestNonAlcoholicDrinks.org - The #1 Guide to Non-Alcoholic Drinks</title>
        <meta name="description" content="Discover the best non-alcoholic alternatives for every occasion." />
        {/* TODO: Add canonical tags, OpenGraph metadata, Twitter cards */}
      </Head>

      <div className="bg-neutral-100 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">The #1 Guide to Non-Alcoholic Drinks</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Expert reviews and rankings of the best alcohol-free options for every occasion.
        </p>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPages.map((page) => (
            <Link href={`/${page.slug}`} key={page.slug} className="block">
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-neutral-100 h-[180px] w-full">
                  {/* TODO: Add featured images for each category */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{page.title}</h3>
                  <p className="mt-2 text-gray-600">Find the perfect options for your lifestyle.</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}