import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Text, Utils, Menu, List, ListItem, Icon} from 'react-essence';

class MateriableError extends React.Component {

    render() {
        return (
        <Block classes={'materiables-error e-background-indigo-500'}>
      		<Block className={'e-container e-text-center'}>
            <Text type={'h1'} classes={'e-text-center e-text-white e-display-4'}>
              404
            </Text>
            <Text type={'h1'} classes={'e-text-center e-text-white e-display-1'}>
              Sorry - Page not found
            </Text>
            <Text type={'p'} classes={'e-text-center e-text-grey-500 e-body-1'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Btn label={'Back home'} ripple={true} type={'primary'} className={'flat e-background-blue-600'} />
            <Btn label={'Contact us'} ripple={true} type={'primary'} className={'flat e-background-blue-700'} />
            <Block classes={'e-padding-top-200'}>
              <Btn icon={"action-account-circle"} type={'flat'} className={"flat e-text-grey-500 e-background-indigo-500 e-headline"} />
              <Btn icon={"action-group-work"} type={'flat'} className={"flat e-text-grey-500 e-background-indigo-500 e-headline"} />
              <Btn icon={"action-perm-phone-msg"} className={"flat e-text-grey-500 e-background-indigo-500 e-headline"} />
              <Btn icon={"file-cloud-done"} className={"flat e-text-grey-500 e-background-indigo-500 e-headline"} />
              <Btn icon={"image-assistant-photo"} className={"flat e-text-grey-500 e-background-indigo-500 e-headline"} />
            </Block>
          </Block>
        </Block>
        );
    }
}

module.exports = MateriableError;
