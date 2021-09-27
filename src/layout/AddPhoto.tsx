import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Button from '../components/Button/Button';
import TextArea from '../components/Form/TextArea';
import IconImageOutline from '../svg/IconImageOutline';

const AddPhoto = () => {
    const { t } = useTranslation();
    const [file, setFile] = useState<string | undefined>(undefined);
    const [description, setDescription] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            try {
                setFile(URL.createObjectURL(event.target.files[0]));
            } catch {
            }
        }
    }

    const isButtonEnabled = () => {
        if (file && description !== "") {
            return false;
        } else {
            return true;
        }
    }

    return (
        <main className="add-photo">
            <div className="add-photo__container">
                {file ? <img src={file} alt="Selected item" className="add-photo__img" /> : <IconImageOutline className="add-photo__img" />}
                <label htmlFor="addFileBtn" className="add-photo__custom">{t("add_photo.add_button")}</label>
                <input onChange={handleChange} id="addFileBtn" type="file" className="add-photo__btn" accept=".jpg, .jpeg, .png" />
                <TextArea value={description} onChange={e => setDescription(e.target.value)} className="add-photo__description" name="description" id="description" cols={30} rows={10} />
                <Button disabled={isButtonEnabled()} className="add-photo__upload" fullwidth style={{ marginTop: '2rem' }}>{t("add_photo.upload_button")}</Button>
            </div>
        </main>
    )
}

export default AddPhoto
