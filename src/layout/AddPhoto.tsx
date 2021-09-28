import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Button from '../components/Button/Button';
import TextArea from '../components/Form/TextArea';
import IconImageOutline from '../svg/IconImageOutline';
import { useAppDispatch } from '../hooks/hooks';
import { postPost } from '../actions/posts.actions';
// import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const AddPhoto = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [file, setFile] = useState<string | undefined>(undefined);
    const [image, setImage] = useState<Blob>();
    const [description, setDescription] = useState<string>("");
    // const [crop, setCrop] = useState<Crop>({
    //     width: 0,
    //     height: 0,
    //     x: 0,
    //     y: 0,
    //     unit: '%',
    //     aspect: 1 / 1
    // });
    // const [width, setWidth] = useState<number>();
    // const [height, setHeight] = useState<number>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            try {
                const url = URL.createObjectURL(event.target.files[0]);
                setFile(url);
                // var img = new Image;

                // img.onload = function () {
                //     setWidth(img.width);
                //     setHeight(img.height);
                // };

                // img.src = url;
                setImage(event.target.files[0]);
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

    const onUpload = () => {
        let formData = new FormData();
        if (image)
            formData.append("file", image);
        formData.append("description", description);
        // formData.append("width", crop.width.toString());
        // formData.append("height", crop.height.toString());
        // formData.append("left", crop.x.toString());
        // formData.append("top", crop.y.toString());
        try {
            dispatch(postPost(formData));
        } catch (error) {
            window.alert(error);
        }
    }
    return (
        <main className="add-photo">
            <div className="add-photo__container">
                {file ? <img src={file} alt="Selected item" className="add-photo__img" /> : <IconImageOutline className="add-photo__img" />}
                <label htmlFor="addFileBtn" className="add-photo__custom">{t("add_photo.add_button")}</label>
                <input onChange={handleChange} id="addFileBtn" type="file" className="add-photo__btn" accept=".jpg, .jpeg, .png" />
                <TextArea placeholder={t("add_photo.description")} value={description} onChange={e => setDescription(e.target.value)} className="add-photo__description" name="description" id="description" cols={30} rows={10} />
                <Button onClick={onUpload} disabled={isButtonEnabled()} className="add-photo__upload" fullwidth style={{ marginTop: '2rem' }}>{t("add_photo.upload_button")}</Button>
            </div>
        </main>
    )
}

export default AddPhoto
