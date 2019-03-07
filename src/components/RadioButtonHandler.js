import React, {Component} from "react";
import RadioButton from "./RadioButton";


class RadioButtonHandler extends Component{
    state = {
        buttons:this.props.buttons
    }
    handleCheck(id){
        this.props.setCheckedID(id);
        this.setState(previous => {
            let arr = previous.buttons.map(item => {
            if(item.id === id){
                return {
                    ...item,
                    checked:true
                }
            }
            return {
                ...item,
                checked:false
            }
            
        })
        return {buttons:arr}
    })
    }
    render(){
        return (
            <div>
                {this.state.buttons.map(item => <RadioButton id={item.id} handleClick={()=>{this.handleCheck(item.id)}}checked={item.checked} text={item.text}/>)}
            </div>
        );
    }
}
export default RadioButtonHandler;