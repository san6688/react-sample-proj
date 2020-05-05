import React from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

const inCompletedTask = (taskList) => taskList.filter((_task) => !_task.get('isCompleted'))

const TaskCount = (props) => {
  const inCompletedTaskSize = inCompletedTask(props.taskList).size
  return (
    <Typography variant="h6" color="secondary">{`${inCompletedTaskSize} / ${props.taskList.size}`}</Typography>
  );
}

const mapStateToProps = (state) => {
  return {
    taskList: state.taskState.get('tasks')
  }
}

export default connect(mapStateToProps)(TaskCount);