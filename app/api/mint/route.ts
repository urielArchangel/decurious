import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req:NextRequest) {

  try {
  const { walletAddress, eventId } = await req.json();

    const response = await axios.post('https://api.zora.co/v1/mint', {
      walletAddress,
      metadata: {
        eventId,
        timestamp: new Date().toISOString(),
      },
      apiKey: process.env.ZORA_API_KEY,
    });

   return NextResponse.json({ success: true, data: response.data },{status:200});
  } catch (error:any) {
   return NextResponse.json({ success: false, error: error.message });
  }
}
