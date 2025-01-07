import { promises as fs } from 'fs';
import path from 'path';
import { TProduct } from 'src/types/product';

const fileJson = path.resolve(__dirname, '../../products.json');

export async function readProductsData(): Promise<TProduct[]> {
  try {
    const data = await fs.readFile(fileJson, 'utf-8');
    return JSON.parse(data) as TProduct[];
  } catch (error) {
    throw new Error('Error reading products');
  }
}

export async function writeProductsData(products: TProduct[]): Promise<void> {
  try {
    const data = JSON.stringify(products, null, 2);
    await fs.writeFile(fileJson, data, 'utf-8');
  } catch (error) {
    throw new Error('Error writing products');
  }
}
