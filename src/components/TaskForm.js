import React from 'react';
import * as Immutable from 'immutable';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import UpdateIcon from '@material-ui/icons/Update';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createTaskAction, updateTaskAction } from './TaskAction';

class TaskForm extends React.Component {
  constructor(props){
    super(props);    
    this.state = {
      tmpId: props.taskFormValues.get('id'),
      tmpDescription: props.taskFormValues.get('description'),
      tmpPriority: props.taskFormValues.get('priority'),
      tmpIsCompleted: props.taskFormValues.get('isCompleted'),
    }
  }

  componentWillUpdate = (nextProps) => {
    if( nextProps.taskFormValues.get('id') !== this.props.taskFormValues.get('id')){
      this.setState({
        tmpId: nextProps.taskFormValues.get('id'),
        tmpDescription: nextProps.taskFormValues.get('description'),
        tmpPriority: nextProps.taskFormValues.get('priority'),
        tmpIsCompleted: nextProps.taskFormValues.get('isCompleted'),
      })
    }    
  }

  handleInputChange = (fieldName,event) => {
    let tmpJson = {};
    tmpJson[fieldName] = event.target.value;
    //updating state
    this.setState(tmpJson);
  }

  handleUpdateTask = () => {
    return this.props.updateTaskAction(Immutable.Map({
      id: this.state.tmpId,
      description: this.state.tmpDescription,
      priority: this.state.tmpPriority,
      isCompleted: this.state.tmpIsCompleted,
    }));
  }

  handleCreateTask = () => {
    return this.props.createTaskAction({
      description: this.state.tmpDescription,
      priority: this.state.tmpPriority,
      isCompleted: this.state.tmpIsCompleted,
    });
  }

  render(){
    return (
      <div>
        <form  noValidate autoComplete="off">          
          <TextField id="outlined-description" label="Description" variant="outlined" value={this.state.tmpDescription} onChange={(e) => this.handleInputChange('tmpDescription',e)}/>
          <TextField id="outlined-priority" label="Priority" variant="outlined" value={this.state.tmpPriority} onChange={(e) => this.handleInputChange('tmpPriority',e)}/>
          { this.props.taskFormValues.get('updateMode') ?
              <IconButton onClick={this.handleUpdateTask} >
                <UpdateIcon color="primary"/>
              </IconButton>
          :
            <IconButton onClick={this.handleCreateTask} disabled={this.state.tmpDescription === '' || this.state.tmpPriority === ''}>
              <AddCircleIcon color="primary"/>
            </IconButton>
          }
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taskFormValues: state.taskFormState,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createTaskAction, updateTaskAction}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);