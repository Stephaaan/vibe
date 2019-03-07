import Application from "./Application"
import {connect} from "react-redux";
import {addChannel, removeChannel, editChannel, setVolume, setPlaying, setStateOfChannel, setListeners} from "./actions/actions";
//todo -> map state to props, map dispatch to props -> done

const mapDispatchToProps = dispatch =>  ({
    addChanel: payload => dispatch(addChannel()),
    removeChannel: payload => dispatch(removeChannel()),
    editChannel: payload => dispatch(editChannel()),
    setVolume: payload => dispatch(setVolume()),
    setPlaying: payload => dispatch(setPlaying()),
    setStateOfChannel: payload => dispatch(setStateOfChannel()),
    setListeners:payload => dispatch(setListeners())
})

const mapStateToProps = state => ({
    channels: state.channels
})
export default connect(mapStateToProps, mapDispatchToProps)(Application);

