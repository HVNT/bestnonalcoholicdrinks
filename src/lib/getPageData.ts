import fs from 'fs';
import path from 'path';

export async function getPageData(slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'content', `${slug}.json`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    return data;
  } catch (error) {
    console.error(`Error loading page data for ${slug}:`, error);
    return null;
  }
}
