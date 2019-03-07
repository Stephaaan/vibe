import React, {Component} from "react";

class ColorChooser extends Component{
    state = {
        choose:1
    }
    handleOnClick(id){
        this.setState({choose:id});
        this.props.choose(id);
    }
    render(){
        return(
            <div className="color_chooser_handler">
                <div className="color_chooser_block">
                    <div onClick={() => this.handleOnClick(1)} className="color_chooser color_chooser_blue">
                        <div className={"color_chooser_whitebox "+((this.state.choose===1)?"color_chooser_active":"")}></div>
                    </div>
                    <div className="color_chooser_color_tag">Blue</div>
                </div>
                <div className="color_chooser_block">
                    <div onClick={() => this.handleOnClick(2)} className="color_chooser color_chooser_red">
                        <div className={"color_chooser_whitebox "+((this.state.choose===2)?"color_chooser_active":"")}></div>
                    </div>
                    <div className="color_chooser_color_tag">Red</div>
                </div>
                <div className="color_chooser_block">
                    <div onClick={() => this.handleOnClick(3)} className="color_chooser color_chooser_green">
                        <div className={"color_chooser_whitebox "+((this.state.choose===3)?"color_chooser_active":"")}></div>
                    </div>
                    <div className="color_chooser_color_tag">Green</div>
                </div>
                <div className="color_chooser_block">
                    <div onClick={() => this.handleOnClick(4)} className="color_chooser color_chooser_purple">
                        <div className={"color_chooser_whitebox "+((this.state.choose===4)?"color_chooser_active":"")}></div>
                    </div>
                    <div className="color_chooser_color_tag">Purple</div>
                </div>
            </div>        
        );
    }
}
export default ColorChooser;