import React, { useState } from 'react'
import Button from '../components/Button/Button';
import Heading from '../components/Heading/Heading';

const SignIn = () => {
    const [name, setName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    return (
        <main className="login">
            <form className="form" onSubmit={() => console.log('Hola')}>
                <Heading className="text-align-center">Sing In</Heading>
                <input className="form__input fullwidth" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
                <input className="form__input fullwidth" type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last name" />
                <input className="form__input fullwidth" type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
                <input className="form__input fullwidth" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <Button className="fullwidth">Sign In</Button>
            </form>
        </main>
    )
}

export default SignIn;