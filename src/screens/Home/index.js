import React,{Component} from 'react'
import {
    SafeAreaView
  } from 'react-native';
import {connect} from 'react-redux'
import { getImageData } from '../../redux/AppImageState/action'
import Carousel from '../components/Carousel';

class Home extends Component {
   

    componentDidMount(){
        this.props.getImageData()
    }

    render() {
        return (
          <SafeAreaView>
            <Carousel data={this.props.imageList} />
        </SafeAreaView>  
            )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getImageData: () => dispatch(getImageData())
    }
};

const mapStateToProps = (state) => {   
    return {
        isLoading:state.AppImageState.isLoading,
        imageList:state.AppImageState.imageList
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Home)