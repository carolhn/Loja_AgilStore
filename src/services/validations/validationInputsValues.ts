import { TProduct } from 'src/types/product';
import { validateProductSchema } from './schemas';

export const validationNewProduct = ({
  name_product,
  quantity,
  category,
  price,
}: TProduct): { status: string; message: string | undefined } | void => {
  const { error } = validateProductSchema.validate({ name_product, quantity, category, price });

  if (error) {
    return { status: 'INVALID_VALUE', message: error.message };
  }
};
