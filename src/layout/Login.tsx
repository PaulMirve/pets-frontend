import React, { FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { login } from '../actions/users.action'
import Button from '../components/Button/Button'
import Form from '../components/Form/Form'
import TextInput from '../components/Form/TextInput'
import Heading from '../components/Heading/Heading'
import { useAppDispatch } from '../hooks/hooks';

const Login = () => {
    const { t } = useTranslation();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const onFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await dispatch(login(username, password));
        } catch (error: any) {
            setError(true);
        }

    }

    return (
        <main className="login">
            <Form onSubmit={onFormSubmit}>
                <Heading centered>{t("login")}</Heading>
                {error && <p className="login__error">{t("login_page.error")}</p>}
                <TextInput fullwidth value={username} onChange={e => setUsername(e.target.value)} name="username" placeholder={t("username")} />
                <TextInput fullwidth value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" placeholder={t("password")} />
                <Button fullwidth>Log In</Button>
            </Form>
        </main>
    )
}

export default Login
