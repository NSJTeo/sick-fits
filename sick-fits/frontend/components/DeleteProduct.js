import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;

const update = (cache, payload) => {
  cache.evict(cache.identify(payload.data.deleteProduct));
};

export default function DeleteProduct({ id, children }) {
  const [deleteProduct, { loading }] = useMutation(DELETE_PRODUCT_MUTATION, {
    variables: { id },
    update,
  });

  const handleClick = () => {
    if (confirm('Are you sure you want to delete this item?')) {
      deleteProduct().catch((error) => {
        alert(error);
      });
    }
  };
  return (
    <button type="button" onClick={handleClick} disabled={loading}>
      {children}
    </button>
  );
}
