import React from "react";

const FormFileUploader = ({title, required, defaultText, warning}) => {
    return(
        <>
            <p className="edit_channel_channel_file_tag">{title + (required?"*":"")}</p>
            <input type="file" name="file" id="file" className="inputfile" onChange={() => ""}/>
            <div className="edit_channel_cover_file">
                <label htmlFor="file" >{defaultText}</label><span className="file_delete">&nbsp;</span>
            </div>
            <div className="edit_channel_format_warning">i{warning}</div>
        </>
    );
} 
export default FormFileUploader;