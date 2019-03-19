import React, {useContext, useState, useEffect} from "react";
import { registerElement, updateComponent } from "../context/contextActions";
import NewChannelFormProviderContext from "../context/NewChannelFormProvider";

const FormFileUploader = ({title, required, defaultText, warning}) => {
    const {state, dispatch} = useContext(NewChannelFormProviderContext);
    useEffect(() => {
        dispatch(registerElement("new_channel_cover_photo"));
        dispatch(updateComponent("new_channel_cover_photo", null));
    }, []);
    const [file, setFile] = useState(null);
    const handleOnChange = (file) => {
        setFile(file);
        dispatch(updateComponent("new_channel_cover_photo", file));
    }
    let fileName = "Choose from computer";
    if(file !== null){
        if(file.name.length > 20){
            fileName=file.name.substring(0, 17)+"...";
        }else{
            fileName= file.name;
        }
    }
    return(
        <>
            <p className="edit_channel_channel_file_tag">{title + (required?"*":"")}</p>
            <input type="file" name="file" id="file" className="inputfile" onChange={(e) => handleOnChange(e.target.files[0])}/>
            <div className="edit_channel_cover_file">
                <label htmlFor="file" >{fileName}</label>{((file === null)?"":<span onClick={() => handleOnChange(null)}className="file_delete">&nbsp;</span>)}
            </div>
            <div className="edit_channel_format_warning">i{warning}</div>
        </>
    );
} 
export default FormFileUploader;