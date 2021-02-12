import React from 'react';
import NewKegForm from  './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';

class SharedView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visibleView: 0,
      masterKegList: [],
      selectedKeg: null
    };
  }

  listClick = () => {
    if(this.state.selectedKeg != null){
      this.setState({
        selectedKeg: null,
        visibleView: 1
      });
    } else {
      this.setState({
        visibleView: 1
      });
    }
  }

  newKegClick = () => {
    if(this.state.selectedKeg != null){
      this.setstate ({
        selectedKeg: null,
        visibleView: 2
      });
    } else {
      this.setState({
        visibleView: 2
      });
    }
  }

  
}

export default SharedView;