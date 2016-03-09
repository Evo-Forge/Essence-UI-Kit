import React from 'react';
import ClassNames from 'classnames';

import {Btn, AppBar, Block, Icon, Image, Text, Utils, Menu, List, ListItem} from 'react-essence';

class MateriableHome extends React.Component {

    render() {
        return (
            <Block className={'materiables-home'}>
              <Block className={'header e-text-center'}>
                  <Image src={'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRaAsZhxyYkDgI2ES6-t6ogd5RFtCtJr1CHH88fl_FtvEXbQz_bNQ'} className={'e-margin-bottom-50'} height={'75px'} />
                  <Text type={'h2'} classes={'e-text-center e-display-3 adjust-h2-header e-margin-bottom-50'}>
                      meet yur new materiable theme
                  </Text>
                  <Block>
                      <Btn label={'Button Example'} ripple={false} type={'primary'} className={'raised e-margin-bottom-50'} />
                      <Btn label={'Button Example'} ripple={false} type={'primary'} className={'raised e-margin-bottom-25'} />
                  </Block>
                  <Btn icon={'hardware-keyboard-arrow-down'} ripple={true} type={'primary'} className={'fab-mini e-text-white e-btn-fab adjust-fab-header'} />
              </Block>
            </Block>  
        );
    }
}

module.exports = MateriableHome;
