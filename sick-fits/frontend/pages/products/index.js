import { useRouter } from 'next/router';
import Products from '../../components/Products';
import Pagination from '../../components/Pagination';

export default function ProductsPage() {
  const router = useRouter();
  const { query } = router;
  const page = parseInt(query.page);
  return (
    <>
      <Pagination page={page || 1} />
      <Products />
      <Pagination page={page || 1} />
    </>
  );
}
