import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState<string>("");
    return (
        <form className="form" onSubmit={() => console.log('Hola')}>
            <input className="form__input" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
            <input className="form__input" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Last name" />
            <input className="form__input" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Username" />
            <input className="form__input" type="email" value={name} onChange={e => setName(e.target.value)} placeholder="Email" />
        </form>
    )
}

export default Form;