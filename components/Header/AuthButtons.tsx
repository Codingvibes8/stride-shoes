import React from 'react';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

export default function AuthButtons() {
  const { isSignedIn } = useUser()

  return isSignedIn ? (
    <UserButton afterSignOutUrl="/" />
  ) : (
    <div className="flex items-center space-x-2">
      <Link href="/sign-in">
        <Button variant="ghost" size="sm">
          Sign In
        </Button>
      </Link>
      <Link href="/sign-up">
        <Button size="sm" className='bg-blue-800 text-white hover:bg-blue-700'>
          Sign Up
        </Button>
      </Link>
    </div>
  )
}