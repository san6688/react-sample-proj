import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createTaskAction } from './TaskAction';

class TaskForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      description: '',
      priority: '',
      isCompleted: false,
    }
  }

  handleInputChange = (fieldName,event) => {
    let tmpJson = {};
    tmpJson[fieldName] = event.target.value;
    this.setState(tmpJson);
  }

  render(){
    return (
      <div>
        <form  noValidate autoComplete="off">          
          <TextField id="outlined-description" label="Description" variant="outlined" onChange={(e) => this.handleInputChange('description',e)}/>
          <TextField id="outlined-priority" label="Priority" variant="outlined" onChange={(e) => this.handleInputChange('priority',e)}/>
          <IconButton onClick={() => this.props.createTaskAction(this.state)} disabled={this.state.description === '' || this.state.priority === ''}>
            <AddCircleIcon color="primary"/>
          </IconButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createTaskAction}, dispatch)
}

export default connect(null,mapDispatchToProps)(TaskForm);