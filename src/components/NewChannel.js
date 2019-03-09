import React, {Component} from "react";
import RadioButtonHandler from "./RadioButtonHandler";
import ColorChooser from "./ColorChooser";
import VolumeController from "./VolumeController";
import { Link, navigate} from "@reach/router"
//TODO: simplify... 
//TODO: prerobit -> 
/* 
    tento komponent -> 
        vybratie online/offline channelu
        + zobrazenie komponentu -> onlinechannelform/offlinechannelform... -> tie komponenty by posielali data automaticky sem a ostatok by bol ako je teraz

*/
class NewChannel extends Component{
    state = {
        name:"",
        checked:2,
        fileName:"Choose a file",
        colorPicked:1,
        volume:15
    }
    handleFileUpload(fileName){
        let prepared = "";
        if(fileName.length > 15){
            prepared = fileName.substring(0, 12) + "...";
        }else{
            prepared = fileName;
        }
        
        this.setState({fileName:prepared});
    }
    deleteFileSelection(){
        this.setState({fileName:"Choose a file"});
    }
    handleColorChoose(id) {
        this.setState({colorPicked:id});
    }
    createChannel(){
        if(this.state.name === undefined || this.state.name === ""){
            console.log("name");
            return;
        }
        if(this.state.dj === undefined || this.state.dj === ""){
            console.log("dj");
            return;
        }
        if(this.state.genre === undefined || this.state.genre === ""){
            console.log("genre");
            return;
        }
        if(this.state.fileName === "Choose a file"){
            console.log("file");
            return;
        }
        if(!this.state.source){
            console.log("source");
            return;
        }
        let colorToText="";
        switch(this.state.colorPicked){
            case 1:
                colorToText="blue";
                break;
            case 2:
                colorToText="red";
                break;
            case 3:
                colorToText="green";
                break;
            default:
                colorToText="purple";
                break;
        }

        this.props.addChannel({
            name:this.state.name,
            type:this.statechecked===1?"live":"offline",
            author:this.state.dj,
            timePlaying:"00:00:00",
            listeners:"0",
            audioSource:this.state.source,
            volume:this.state.volume,
            color:colorToText,
            genre:this.state.genre
        });
        navigate("/");
    }
    render(){
        return (
            <div className="animated_logo top center">
                 &nbsp;
                
                    <div className="edit_channel_screen_edit_channel">
                        {/*edit channel div*/}
                        <div className="edit_channel_edit_form">
                            <p className="edit_channel_new_channel_p">New Channel</p>
                            <div className="edit_channel_line">
                                &nbsp;
                            </div>
                            <div className="edit_channel_radioButtons">
                                <RadioButtonHandler setCheckedID={(id)=>this.setState({checked:id})}buttons={([{id:1, text:"Live input channel", checked:false},{id:2, text:"Offline selection channel", checked:true}])}/>
                            </div>
                            <div>
                                <p className="edit_channel_channel_name_tag">Channel Name*</p>
                                <input type="text" onChange={e => this.setState({name:e.target.value})} className="new_channel_text_input new_channel_name"/>
                                <p className="edit_channel_channel_name_warning">i Maximum 48 characters</p>
                                <p className="edit_channel_channel_dj_tag">Dj name*</p>
                                <input type="text" onChange={e => this.setState({dj:e.target.value})} className="new_channel_text_input new_channel_dj"/>
                                <p className="edit_channel_channel_dj_warning">i Maximum 20 characters</p>
                        
                                <p className="edit_channel_channel_genre_tag">Generes*</p>
                                <input type="text" onChange={e => this.setState({genre:e.target.value})} className="new_channel_text_input new_channel_genre"/>
                                <p className="edit_channel_channel_genre_warning">i Maximum 50 characters</p>
                                <p className="edit_channel_channel_file_tag">Upload Channel cover picture*</p>
                                <input type="file" name="file" id="file" className="inputfile" onChange = {e => 
                                        this.handleFileUpload(e.target.files[0].name)
                                }/>
                                <div className="edit_channel_cover_file"><label htmlFor="file" >{this.state.fileName}</label>{this.state.fileName !== "Choose a file"?<span className="file_delete" onClick={()=>this.deleteFileSelection()}>&nbsp;</span>:""}</div>
                                <div className="edit_channel_format_warning">i Please use .mp3 file with 320kbps</div>
                                <div className="edit_channel_color">Channel color theme</div>
                                <ColorChooser choose={id => this.handleColorChoose(id)}/>
                                <div className="edit_channel_color">Audio source*</div>
                                <select onChange={e=>this.setState({source:e.target.value})} className="edit_channel_source_select">
                                    <option>skuska</option>
                                    <option>skuska2</option>
                                </select>
                                <div className="edit_channel_volume_control">
                                    <div>Channel volume</div>
                                    <VolumeController volume={this.state.volume} setVolume={(volume) => this.setState({volume})}/>
                                </div>
                            </div>
                        </div>
                        {/*preview div*/}
                        <div className="edit_channel_preview">
                            <div className="edit_channel_handler">
                                <p className="edit_channel_preview_text">Preview</p>
                            </div>
                        </div>
                        <div className="skuska">
                            <Link className="linkWidth" to="/"><div className="backButton">
                                Back
                            </div></Link>
                            <div className="saveButton" onClick={()=>{this.createChannel()}}>
                                Go live
                            </div>
                        </div>
                    </div> 
                </div>
        )
    }  
}
export default NewChannel;
//24px;