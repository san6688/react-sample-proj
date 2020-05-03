import React from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

const TaskCount = (props) => {
  return (
    <Typography variant="h6" color="secondary">{props.taskList.length}</Typography>
  );
}

const mapStateToProps = (state) => {
  return {
    taskList: state.tasks
  }
}

export default connect(mapStateToProps)(TaskCount);