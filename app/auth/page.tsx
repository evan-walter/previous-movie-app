'use client';

import { useState } from 'react';
import Input from '@/app/components/Input';

export default function Auth() {
    const [email, setEmail] = useState('');

    return (
        <div>
            <h2>Sign in</h2>
            <Input
                label='Email'
                onChange={(e: any) => {
                    setEmail(e.target.value);
                }}
                id='email'
                type='email'
                value={email}
            />
        </div>
    );
}
