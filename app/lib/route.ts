import { NextRequest, NextResponse } from 'next/server';
import { getWeather } from '@/lib/weather';

export async function POST(req: NextRequest) {
  const { city } = await req.json();
  try {
    const weather = await getWeather(city);
    return NextResponse.json(weather);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// app/api/users/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { name, email, city } = await req.json();

    const newUser = await prisma.user.create({
      data: { name, email, city },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}