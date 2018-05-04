import React, { Component } from 'react';
import { Text,
         View,
         TouchableWithoutFeedback,
         LayoutAnimation} from 'react-native';
import { connect } from 'react-redux';
import { CardItem } from './common';
//To inport multiple actions in a variable
import * as actions from '../actions';
class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderDecription() {
    const { item, expanded } = this.props;
    if(expanded) {
      return (
        <CardItem>
          <Text style={{flex:1,paddingLeft:10}}>{ item.description }</Text>
        </CardItem>
      );
    }
  }
  render() {
    const { titleStyle } = styles;
    const { id, title} = this.props.item;
    return(
      <TouchableWithoutFeedback onPress={ ()=> this.props.selectLibrary(id) }>
        <View>
          <CardItem>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardItem>
          {this.renderDecription()}
          </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 10
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.item.id;
  return { expanded };
};
export default connect(mapStateToProps,actions)(ListItem);
