import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function TxPage() {
  const { txHash } = useParams();
  const [tx, setTx] = useState(null);

  useEffect(() => {
    axios.get(`/api/tx/${txHash}`)
      .then(res => setTx(res.data))
      .catch(err => console.error(err));
  }, [txHash]);

  if (!tx) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold">Transaction</h2>
      <p><strong>Hash:</strong> {tx.hash}</p>
      <p><strong>From:</strong> {tx.from}</p>
      <p><strong>To:</strong> {tx.to}</p>
      <p><strong>Value:</strong> {tx.value}</p>
    </div>
  );
}

export default TxPage;
