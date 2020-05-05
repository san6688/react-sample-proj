import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { markCompleteAction, deleteTaskAction } from './TaskAction';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton';

const getColor = (priority) => {
  let color = 'black';
  switch(priority){
    case 'high':
      color = 'red';
      break;
    case 'medium':
      color = 'orange';
      break;
    case 'low':
      color = 'green';
      break;
    default:
      break;
  }
  return color;
}


const Task = (props) => {

  const handleComplete = () => {
    props.markCompleteAction(props.item.get('id'));
  }

  const handleDelete = () => {
    props.deleteTaskAction(props.item.get('id'));
  }

  return (
    <Card  style={{ width: '50%', height: 80, paddingTop: 10}} variant="outlined" >
      <Typography variant="h5" style={{ color: getColor(props.item.get('priority')), textDecoration: (props.item.get('isCompleted') ? 'line-through' : '')}}>{props.item.get('description')}</Typography>
      <IconButton onClick={handleComplete}>
        <DoneIcon color="primary"/>
      </IconButton>
      <IconButton onClick={handleDelete}>
        <DeleteIcon color="secondary" />
      </IconButton>
    </Card>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    markCompleteAction,
    deleteTaskAction,  
  },dispatch);
}


export default connect(null,mapDispatchToProps)(Task);