import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Task from './Task';
import { connect } from 'react-redux';

class TaskList extends React.Component {

  constructor(props){
    super(props);
    // this.state = {
    //   tasks: [
    //     {
    //       id: 1,
    //       description: 'Task 1',
    //       priority: 'high',
    //       isCompleted: false,
    //     },
        
    //     {
    //       id: 3,
    //       description: 'Task 3',
    //       priority: 'low',
    //       isCompleted: false,
    //     },
    //     {
    //       id: 2,
    //       description: 'Task 2',
    //       priority: 'medium',
    //       isCompleted: false,
    //     },
    //     {
    //       id: 4,
    //       description: 'Task 4',
    //       priority: '',
    //       isCompleted: true,
    //     },
        
    //   ]
    // }
  }

  // markAsComplete = (id) => {
  //   let index = this.state.tasks.findIndex((_task) => _task.id === id); 
  //   let copyTasks = this.state.tasks.slice();
  //   let tmpTask= copyTasks[index];
  //   tmpTask.isCompleted = !tmpTask.isCompleted;
  //   copyTasks[index] = tmpTask
  //   this.setState({ tasks: copyTasks });
  // }

  render() {
    return (
      <Paper elevation={5} style={{ height:'80vh', width: '80vw', margin: 'auto', marginTop: 30}}>
        <Grid container spacing={5} direction="row"
    justify="space-around"
  alignItems="center">
        {
          this.props.tasksFromStore.map((_task) => <Grid item xs={12} style={{marginLeft: 40}}><Task item={_task} /></Grid>)
        }  
        </Grid>
        
      </Paper>
    )
  }
}

//redux
const mapStateToProps = (state) => {
  return {
    tasksFromStore: state.taskState.get('tasks')
  }
}

export default connect(mapStateToProps)(TaskList);