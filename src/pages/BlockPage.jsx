import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function BlockPage() {
  const { blockNumber } = useParams();
  const [block, setBlock] = useState(null);

  useEffect(() => {
    axios.get(`/api/blocks/${blockNumber}`)
      .then(res => setBlock(res.data))
      .catch(err => console.error(err));
  }, [blockNumber]);

  if (!block) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold">Block #{block.number}</h2>
      <p><strong>Hash:</strong> {block.hash}</p>
      <p><strong>Timestamp:</strong> {block.timestamp}</p>
      <p><strong>Transactions:</strong> {block.transactions.length}</p>
    </div>
  );
}

export default BlockPage;
