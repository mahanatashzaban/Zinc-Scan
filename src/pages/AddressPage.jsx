import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function AddressPage() {
  const { address } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    axios.get(`/api/address/${address}`)
      .then(res => setInfo(res.data))
      .catch(err => console.error(err));
  }, [address]);

  if (!info) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold">Address Info</h2>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Balance:</strong> {info.balance}</p>
      <h3 className="mt-4 font-bold">Transactions:</h3>
      <ul>
        {info.transactions.map(tx => (
          <li key={tx.hash}>{tx.hash.slice(0, 20)}...</li>
        ))}
      </ul>
    </div>
  );
}

export default AddressPage;
