import { useRouter } from 'next/dist/client/router';
import RequestReset from '../components/RequestReset';
import Reset from '../components/Reset';

export default function ResetPage() {
  const { query } = useRouter();

  if (!query.token) {
    return <RequestReset />;
  }

  return (
    <div>
      <Reset token={query.token} />
    </div>
  );
}
