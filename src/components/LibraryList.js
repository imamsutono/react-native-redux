import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem = ({ item }) => (
    <ListItem library={item} />
  );

  render() {
    const { libraries } = this.props;

    return (
      <FlatList
        data={libraries}
        keyExtractor={item => item.id}
        renderItem={this.renderItem}
      />
    );
  }
}

const mapStateToProps = state => (
  { libraries: state.libraries }
);

export default connect(mapStateToProps)(LibraryList);
