import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { postUser } from '../actions/users.action';
import Button from '../components/Button/Button';
import Form from '../components/Form/Form';
import TextInput from '../components/Form/TextInput';
import Heading from '../components/Heading/Heading';
import { useAppDispatch } from '../hooks/hooks';
const SignIn = () => {
    const { t } = useTranslation();
    const [name, setName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPasword] = useState<string>("");
    const dispatch = useAppDispatch();

    useEffect(() => {
        document.title = "Pets | Sign In"
    });

    return (
        <main className="login">
            <Form formAction="post" onSubmit={(e) => {
                e.preventDefault();
                dispatch(postUser({ name, lastName, email, username, password }))
            }}>
                <Heading centered>{t("sign_in")}</Heading>
                <TextInput fullwidth name="name" value={name} onChange={e => setName(e.target.value)} placeholder={t("name")} />
                <TextInput fullwidth name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} placeholder={t("last_name")} />
                <TextInput fullwidth name="username" value={username} onChange={e => setUsername(e.target.value)} placeholder={t("username")} />
                <TextInput fullwidth type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={t("email")} />
                <TextInput fullwidth type="password" name="password" value={password} onChange={e => setPasword(e.target.value)} placeholder={t("password")} />
                <Button fullwidth>{t("sign_in")}</Button>
            </Form>
        </main >
    )
}

export default SignIn;