import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Button from '../components/Button/Button';

const AddPhoto = () => {
    const { t } = useTranslation();
    const [file, setFile] = useState<string | undefined>(undefined);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            try {
                setFile(URL.createObjectURL(event.target.files[0]));
            } catch {
            }
        }
    }
    return (
        <main className="add-photo">
            <div className="add-photo__container">
                {file && <img src={file} alt="Selected item" />}
                <label htmlFor="addFileBtn" className="add-photo__custom">{t("add_photo.add_button")}</label>
                <input onChange={handleChange} id="addFileBtn" type="file" className="add-photo__btn" accept=".jpg, .jpeg, .png" />
                {
                    file && <Button fullwidth style={{ marginTop: '2rem' }}>{t("add_photo.upload_button")}</Button>
                }
            </div>
        </main>
    )
}

export default AddPhoto
