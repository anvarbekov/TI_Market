import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, surname, phone, message } = await request.json();

  const BOT_TOKEN = "7948547256:AAEwV7sL0_qUdv0TuMC3yyqSRcxONTeH_BM";
  // const CHAT_ID = "1067413897"; // botga xabar yuboriladi
  // const CHAT_ID = "6507216370"; // guruhga yuborish
  const CHAT_ID = "-1002477939782" // kanalga yuborish
  const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  const text = `Ism: ${name}\nFamiliya: ${surname}\nTelefon raqam: ${phone}\nXabar: ${message}`;

  const response = await fetch(TELEGRAM_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: text,
    }),
  });

  if (response.ok) {
    return NextResponse.json({ message: 'Xabar yuborildi' });
  } else {
    return NextResponse.json({ message: 'Xatolik yuz berdi' }, { status: 500 });
  }
}
