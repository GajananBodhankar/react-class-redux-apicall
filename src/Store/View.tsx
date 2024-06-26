import { connect } from "react-redux";
import { Component } from "react";
import { apiCall } from ".";

interface Iprops {
  data: [];
  status: string;
  apiCall: () => void;
}

class View extends Component<Iprops> {
  componentDidMount(): void {
    this.props.apiCall();
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <p>In view</p>
        <p>{this.props.status}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.counterReducer.data,
  status: state.counterReducer.status,
});
const mapDispatchToProps = (dispatch) => {
  return {
    apiCall:()=>dispatch(apiCall),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(View);
