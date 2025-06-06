import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import FAQ from '../components/FAQ';
import { getPageData } from '../lib/getPageData';
import { generateMeta } from '../utils/generateMeta';

export default function ProductPage({ pageData }) {
  if (!pageData) {
    return <div>Page not found</div>;
  }

  const { title, metaDescription, intro, products, faq } = pageData;
  const meta = generateMeta(title, metaDescription);

  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {/* TODO: Add canonical tags, OpenGraph metadata, Twitter cards */}
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{title}</h1>
        <p className="text-lg text-gray-700 mb-10">{intro}</p>

        <div className="space-y-8">
          {products.map((product) => (
            <ProductCard key={product.rank} product={product} />
          ))}
        </div>

        {faq && faq.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <FAQ items={faq} />
          </div>
        )}
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // For now, we'll just pre-render the kanna drinks page
  return {
    paths: [{ params: { slug: 'best-kanna-drinks' } }],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const pageData = await getPageData(slug);

  if (!pageData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pageData,
    },
    revalidate: 86400, // Revalidate once per day
  };
};