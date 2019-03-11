import Application from "./MainRouter"
import {connect} from "react-redux";
import {addChannel, removeChannel, editChannel, setVolume, setPlaying, setStateOfChannel, setListeners} from "./actions/actions";
//todo -> map state to props, map dispatch to props -> done

const mapDispatchToProps = dispatch =>  ({
    addChannel: payload => dispatch(addChannel(payload)),
    removeChannel: payload => dispatch(removeChannel(payload)),
    editChannel: payload => dispatch(editChannel(payload)),
    setVolume: payload => dispatch(setVolume(payload)),
    setPlaying: payload => dispatch(setPlaying(payload)),
    setStateOfChannel: payload => dispatch(setStateOfChannel(payload)),
    setListeners:payload => dispatch(setListeners(payload))
})

const mapStateToProps = state => ({
    channels: state.channels
})
export default connect(mapStateToProps, mapDispatchToProps)(Application);

/* 
    OK
*/