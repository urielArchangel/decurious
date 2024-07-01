'use client'
import { useState } from 'react';
import WalletConnect from '@/src/fe/event/components/WalletConnection';
import { eventMap } from '@/src/core/data/eventIDMap';

const AttendPage = ({eventID}:{eventID:string}) => {
  const data = eventMap[eventID]
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [message, setMessage] = useState('');



  const handleCheckIn = async (walletAddress:string) => {
    // try {
    //   const response = await fetch((process.env.NODE_ENV == "production"?(window.location.origin+'/api/mint'):"/api/mint"), {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       walletAddress,
    //       eventId:eventID
    //     }),
    //   });
    //   const data = await response.json();
    //   if (data.success) {
    //     setMessage('NFT minted successfully!');
    //   } else {
    //     setMessage(`Error: ${data.error}`);
    //   }
    // } catch (error:any) {
    //   setMessage(`Error: ${error.message}`);
    // }
  };

  return (
    <div>
 
      <WalletConnect onConnect={handleCheckIn} data={data} />
     
      {message && <p>{message}</p>}
    </div>
  );
};

export default AttendPage;
