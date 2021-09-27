import React, { useState } from 'react'
import Button from '../components/Button/Button';
import Form from '../components/Form/Form';
import TextInput from '../components/Form/TextInput';
import Heading from '../components/Heading/Heading';

const SignIn = () => {
    const [name, setName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    return (
        <main className="login">
            <Form onSubmit={() => window.alert('Hola')}>
                <Heading className="text-align-center">Sing In</Heading>
                <TextInput name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
                <TextInput name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last name" />
                <TextInput name="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
                <TextInput name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <Button fullwidth>Sign In</Button>
            </Form>
        </main>
    )
}

export default SignIn;