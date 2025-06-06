export function generateMeta(title: string, description: string) {
  // TODO: Enhance with more SEO metadata generation
  return {
    title: `${title} | BestNonAlcoholicDrinks.org`,
    description: description || 'Discover the best non-alcoholic drinks for every occasion.',
  };
}