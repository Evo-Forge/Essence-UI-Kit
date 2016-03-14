import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Text, Utils, Menu, List, ListItem, Icon, Image, Input} from 'react-essence';

class MateriableSoon extends React.Component {

    render() {
        return (
        <Block classes={'materiables-soon e-background-indigo-500'}>
      		<Block className={'e-container e-text-center'}>
            <Image src={'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/compass-icon.png'} height={'150px'} />
            <Text type={'h1'} classes={'e-text-center e-text-white e-display-3'}>
              meet your new materiable theme
            </Text>
            <Text type={'p'} classes={'e-text-center e-text-grey-500 e-body-1'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text type={'h1'} classes={'e-text-center adjust-margin e-text-white e-display-4'}>
              33 : 22 : 20 : 05
            </Text>
            <Block classes={'brick brick-2'}>
            </Block>
            <Block classes={'brick brick-2'}>
              <Text type={'p'} classes={'e-text-center e-text-grey-500 e-text-uppercase e-body-1'}>
                days
              </Text>
            </Block>
            <Block classes={'brick brick-2'}>
              <Text type={'p'} classes={'e-text-center e-text-grey-500 e-text-uppercase e-body-1'}>
                hours
              </Text>
            </Block>
            <Block classes={'brick brick-2'}>
              <Text type={'p'} classes={'e-text-center e-text-grey-500 e-text-uppercase e-body-1'}>
                minutes
              </Text>
            </Block>
            <Block classes={'brick brick-2'}>
              <Text type={'p'} classes={'e-text-center e-text-grey-500 e-text-uppercase e-body-1'}>
                seconds
              </Text>
            </Block>
            <Block classes={'brick brick-2'}>
            </Block>
            <Block classes={'brick brick-12'}>
              <Block classes={'brick brick-2 e-padding-top-50'}>
              </Block>
              <Block classes={'brick brick-6 e-text-right e-padding-top-50'}>
                <Input type={'email'} name={'label'} label={'Email address'} classes={'e-text-white'}/>
              </Block>
              <Block classes={'brick brick-4 e-text-left e-padding-top-50'}>
                <Btn label={'subscribe now'} ripple={true} type={'primary'} className={'flat e-background-pink-300 e-text-white'} />
              </Block>
              <Block classes={'e-row'}>
                <Btn icon={"action-account-circle"} type={'flat'} className={"flat e-text-grey-500 e-background-indigo-500 e-headline"} />
                <Btn icon={"action-group-work"} type={'flat'} className={"flat e-text-grey-500 e-background-indigo-500 e-headline"} />
                <Btn icon={"action-perm-phone-msg"} className={"flat e-text-grey-500 e-background-indigo-500 e-headline"} />
                <Btn icon={"file-cloud-done"} className={"flat e-text-grey-500 e-background-indigo-500 e-headline"} />
                <Btn icon={"image-assistant-photo"} className={"flat e-text-grey-500 e-background-indigo-500 e-headline"} />
              </Block>
            </Block>
          </Block>
        </Block>
        );
    }
}

module.exports = MateriableSoon;
