import React, { useState } from 'react'
import Button from '../components/Button/Button'
import Form from '../components/Form/Form'
import TextInput from '../components/Form/TextInput'
import Heading from '../components/Heading/Heading'

const Login = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    return (
        <main className="login">
            <Form>
                <Heading centered>Log In</Heading>
                <TextInput value={username} onChange={e => setUsername(e.target.value)} name="username" placeholder="Username" />
                <TextInput value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" placeholder="Password" />
                <Button fullwidth>Log In</Button>
            </Form>
        </main>
    )
}

export default Login
