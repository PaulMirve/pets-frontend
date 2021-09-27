import React, { FormEvent, useState } from 'react'
import { login } from '../actions/users.action'
import Button from '../components/Button/Button'
import Form from '../components/Form/Form'
import TextInput from '../components/Form/TextInput'
import Heading from '../components/Heading/Heading'
import { useAppDispatch } from '../hooks/hooks';

const Login = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const onFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await dispatch(login(username, password));
        } catch (error: any) {

        }

    }

    return (
        <main className="login">
            <Form onSubmit={onFormSubmit}>
                <Heading centered>Log In</Heading>
                {error && <p className="login__error">Incorrect username or password</p>}
                <TextInput fullwidth value={username} onChange={e => setUsername(e.target.value)} name="username" placeholder="Username" />
                <TextInput fullwidth value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" placeholder="Password" />
                <Button fullwidth>Log In</Button>
            </Form>
        </main>
    )
}

export default Login
