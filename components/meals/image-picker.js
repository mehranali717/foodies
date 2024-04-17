'use client'
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
const ImagePicker =({label, name})=>{
    const [pickedImage, setPickedImage]= useState();
    const imageInput = useRef();
    const handlePickClick =()=>{
        imageInput.current.click();
    }
    const handlePickImage = (event)=>{
        const file = event.target.files[0];
        if(!file){
            setPickedImage(null)
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = ()=>{
           setPickedImage(fileReader.result);
        }
        fileReader.readAsDataURL(file)

    }
    return <div className={classes.picker}>
            <label htmlFor="image">{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <span>No Image picked yet.</span>}
                    {pickedImage && (
                        <Image src={pickedImage} alt="Image selected by User" width={100} height={100} />
                    )}
                </div>
                <input type="file" id="image" accept="image/png, eimage/jpeg" name={name} ref={imageInput} className={classes.input} onChange={handlePickImage} required/>
                <button className={classes.button} type="button" onClick={handlePickClick}>
                    Pick an Image
                </button>
            </div>
    </div>
}
export default ImagePicker