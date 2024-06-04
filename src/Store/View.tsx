import { connect } from "react-redux";
import { Component } from "react";
import { apiCall } from ".";

class View extends Component {
  componentDidMount(): void {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <p>In view</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  status: state.status,
});
const mapDispatchToProps = (dispatch) => {
  return {
    apiCall,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(View);
