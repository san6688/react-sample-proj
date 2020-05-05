import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { markCompleteAction } from './TaskAction';

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

  const handleClick = () => {
    props.markCompleteAction(props.item.get('id'));
  }

  return (
    <Card  style={{ width: '50%', height: 50, paddingTop: 10}} variant="outlined" onClick={handleClick}>
      <Typography variant="h5" style={{ color: getColor(props.item.get('priority')), textDecoration: (props.item.get('isCompleted') ? 'line-through' : '')}}>{props.item.get('description')}</Typography>
    </Card>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    markCompleteAction,  
  },dispatch);
}


export default connect(null,mapDispatchToProps)(Task);