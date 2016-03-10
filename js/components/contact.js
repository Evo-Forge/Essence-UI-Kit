import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Text, Utils, Menu, List, ListItem, Paper, Input, Icon } from 'react-essence';


class MateriableContact extends React.Component {

    render() {
        return (
          <Block className={'materiables-contact'}>
            <Block className={'header-bg-big'}>
            </Block>
            <Block className={'main-bg e-background-grey-100'}>
              <Block className={'e-container '}>
                <Paper className={'padding-50 e-background-white negative-margin'}>
                  <Block classes={'e-row'}>
                    <Block classes={'brick brick-7'}>
                      <Text type={'h2'} classes={'e-text-left e-text-grey-800 e-text-uppercase e-headline'}>
                        send a message
                      </Text>
                      <Icon name={"social-person"} className={"e-text-grey-700"} /><Input classes={'has-success'} type={'text'} name={'label'} placeholder={'Your name'}/>
                      <Icon name={"communication-email"} className={"e-text-grey-700"} /><Input type={'email'} name={'label'} label={'Your email'}/>
                      <Icon name={"social-whatshot"} className={"e-text-grey-700"} /><Input type={'text'} name={'label'} label={'Your job'}/>
                      <Icon name={"communication-messenger"} className={"e-text-grey-700"} /><Input type={'text'} name={'label'} label={'Your message'}/>
                      <Text type={'a'} href={''} classes={'e-text-right e-text-grey-700 e-text-uppercase e-body1'}>clear</Text>
                      <Text type={'a'} href={''} classes={'e-text-right e-text-indigo-600 e-text-uppercase e-body1'}>send message</Text>
                    </Block>
                    <Block classes={'brick brick-5'}>
                      <Text type={'h2'} classes={'e-text-left e-text-grey-800 e-text-uppercase e-headline'}>
                        get social
                      </Text>
                      <Btn icon={'action-accessibility'} ripple={true} type={'fab'} className={'fab e-text-grey-800 e-background-grey-300'} />
                      <Btn icon={'action-info-outline'} ripple={true} type={'fab'} className={'fab e-text-grey-800 e-background-grey-300'} />
                      <Btn icon={'action-loyalty'} ripple={true} type={'fab'} className={'fab e-text-grey-800 e-background-grey-300'} />
                      <Btn icon={'action-thumb-up'} ripple={true} type={'fab'} className={'fab e-text-grey-800 e-background-grey-300'} />
                      <Btn icon={'av-timer'} ripple={true} type={'fab'} className={'fab e-text-grey-800 e-background-grey-300'} />
                    </Block>
                  </Block>
                </Paper>
              </Block>
              <Btn icon={'hardware-keyboard-arrow-down'} ripple={true} type={'fab'} className={'fab e-text-white e-btn-fab adjust-fab-header e-background-pink-A200'} />
            </Block>
          </Block>
        );
    }
}

module.exports = MateriableContact;
