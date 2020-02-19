import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;

    if (error !== prevProps.error) {
      Object.keys(error.msg).map(obj => {
        alert.error(`${obj.toUpperCase()}: ${error.msg[obj]}`);
        console.log(`Alert: ${error}`);
      });
    }

    if (message !== prevProps.message) {
      Object.keys(message).map(m => {
        alert.success(message[m]);
      });
    }
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
