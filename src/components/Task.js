import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

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
  return (
    <Card  style={{ width: '50%', height: 50, paddingTop: 10}} variant="outlined" onClick={() => props.handleComplete(props.item.id)}>
      <Typography variant="h5" style={{ color: getColor(props.item.priority), textDecoration: (props.item.isCompleted ? 'line-through' : '')}}>{props.item.description}</Typography>
    </Card>
  );
}

export default Task;