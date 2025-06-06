import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import FAQ from '../components/FAQ';
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
  const contentDirectory = path.join(process.cwd(), 'content');
  
  // Check if the content directory exists
  if (!fs.existsSync(contentDirectory)) {
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
  
  // Read all JSON files from the content directory
  const filenames = fs.readdirSync(contentDirectory);
  const jsonFiles = filenames.filter(filename => filename.endsWith('.json'));
  
  // Create paths for each JSON file
  const paths = jsonFiles.map(filename => ({
    params: { slug: filename.replace('.json', '') },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = path.join(process.cwd(), 'content', `${slug}.json`);
  
  try {
    if (!fs.existsSync(filePath)) {
      return {
        notFound: true,
      };
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const pageData = JSON.parse(fileContents);
    
    return {
      props: {
        pageData,
      },
      revalidate: 86400, // Revalidate once per day
    };
  } catch (error) {
    console.error(`Error loading page data for ${slug}:`, error);
    return {
      notFound: true,
    };
  }
};
