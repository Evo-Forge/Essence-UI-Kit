import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Divider, Icon, Text, Utils, Menu, List, ListItem} from 'react-essence';

class MateriableHeader extends React.Component {

    render() {
        return (
            <AppBar className={'e-background-indigo-400 e-text-white'}>
                <Block className={'e-container flex-nav relative'}>
                    <Menu type={'cover'} icon={'navigation-menu'} className={'e-left display-type-little'}>
                            <ListItem className={'icon-list-nav'}>
                                <Icon name={"navigation-menu"} className={"e-text-grey-400"} />
                             </ListItem>
                             <ListItem className={'list-nav-little'}>
                                  <Text className={'adjust-list-nav'}>
                                     <Text type={'a'} className={"e-text-grey-400"} href={'#home'}><Icon name={"action-home"} className={"e-text-grey-400"} />Home</Text>
                                  </Text>
                              </ListItem>
                              <ListItem className={'list-nav-little'}>
                                   <Text className={'adjust-list-nav'}>
                                      <Text type={'a'} className={"e-text-grey-400"} href={'#layout'}><Icon name={"action-receipt"} className={"e-text-grey-400"} />Layout</Text>
                                   </Text>
                               </ListItem>
                              <ListItem className={'list-nav-little'}>
                                   <Text className={'adjust-list-nav'}>
                                      <Text type={'a'} className={"e-text-grey-400"} href={'#blog'}><Icon name={"editor-insert-emoticon"} className={"e-text-grey-400"} />Blog</Text>
                                   </Text>
                               </ListItem>
                               <ListItem className={'list-nav-little'}>
                                    <Text className={'adjust-list-nav'}>
                                       <Text type={'a'} className={"e-text-grey-400"} href={'#pages'}><Icon name={"editor-format-align-left"} className={"e-text-grey-400"} />Pages</Text>
                                    </Text>
                                </ListItem>
                                <ListItem className={'list-nav-little'}>
                                     <Text className={'adjust-list-nav'}>
                                        <Text type={'a'} className={"e-text-grey-400"} href={'#portfolio'}><Icon name={"editor-insert-photo"} className={"e-text-grey-400"} />Portfolio</Text>
                                     </Text>
                                 </ListItem>
                                 <ListItem className={'list-nav-little'}>
                                      <Text className={'adjust-list-nav'}>
                                         <Text type={'a'} className={"e-text-grey-400"} href={'#contact'}><Icon name={"maps-local-post-office"} className={"e-text-grey-400"} />Contact</Text>
                                      </Text>
                                 </ListItem>
                    </Menu>
                    <Text className={'logo-text'}>
                        Materiable
                     </Text>
                    <List type={'inline'} className={'display-type-full'}>
                     <ListItem className={'list-nav'}>
                          <Text className={'adjust-list-nav'}>
                             <Text type={'a'} href={'#home'}>HOME</Text>
                             <Icon name={"hardware-keyboard-arrow-down"} className={"e-text-white"} />
                          </Text>
                      </ListItem>
                      <ListItem className={'list-nav'}>
                           <Text className={'adjust-list-nav'}>
                              <Text type={'a'} href={'#layout'}>LAYOUT</Text>
                              <Icon name={"hardware-keyboard-arrow-down"} className={"e-text-white"} />
                           </Text>
                       </ListItem>
                      <ListItem className={'list-nav'}>
                           <Text className={'adjust-list-nav'}>
                              <Text type={'a'} href={'#blog'}>BLOG</Text>
                              <Icon name={"hardware-keyboard-arrow-down"} className={"e-text-white"} />
                           </Text>
                       </ListItem>
                       <ListItem className={'list-nav'}>
                            <Text className={'adjust-list-nav'}>
                               <Text type={'a'} href={'#pages'}>PAGES</Text>
                               <Icon name={"hardware-keyboard-arrow-down"} className={"e-text-white"} />
                            </Text>
                        </ListItem>
                        <ListItem className={'list-nav'}>
                             <Text className={'adjust-list-nav'}>
                                <Text type={'a'} href={'#portfolio'}>PORTFOLIO</Text>
                                <Icon name={"hardware-keyboard-arrow-down"} className={"e-text-white"} />
                             </Text>
                         </ListItem>
                         <ListItem className={'list-nav'}>
                              <Text className={'adjust-list-nav'}>
                                 <Text type={'a'} href={'#contact'}>CONTACT</Text>
                                 <Icon name={"hardware-keyboard-arrow-down"} className={"e-text-white"} />
                              </Text>
                         </ListItem>
                         </List>
                    <Block className={'e-right absolute'}>
                        <Icon name={"action-search"} className={"e-text-white"} />
                    </Block>
                </Block>
            </AppBar>
        );
    }
}

module.exports = MateriableHeader;
