import React, { Component } from 'react';
import {withGetScreen} from 'react-getscreen'

import Image1 from '../components/image-slide1'
import Image1m from '../components/image-slide1m'
import Image2 from '../components/image-slide2'
import Image2m from '../components/image-slide2m'
import Image3 from '../components/image-slide3'
import Image3m from '../components/image-slide3m'

class Test extends Component {
  render() {
    if(this.props.image === '1')
    {
      return this.props.isMobile() ? <Image1m/> : <Image1/>
    }

    if(this.props.image === '2')
    {
      return this.props.isMobile() ? <Image2m/> : <Image2/>
    }

    if(this.props.image === '3')
    {
      return this.props.isMobile() ? <Image3m/> : <Image3/>
    }

    if (this.props.isMobile()) return <div>Mobile</div>;
    if (this.props.isTablet()) return <div>Tablet</div>;
    return <div>Desktop</div>;
  }
}

export default withGetScreen(Test);