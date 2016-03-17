import React from 'react';
import ClassNames from 'classnames';

import {AppBar, Block, Card, CardContent, Image, Icon, List, ListItem, Menu, Paper, Text, Utils} from 'react-essence';

class MateriablePortfolio extends React.Component {

    render() {
        return (
          <Block className={'materiable-portfolio'} id={'portfolio'}>

            <Block className={'light-bg e-background-indigo-500'}>
              <Block className={'container e-background-white'}>
                <Menu type={'cover'} icon={'navigation-menu'} className={'e-left drop-menu'}>
                    <ListItem className={'icon-list-nav'}>
                      <Icon name={"navigation-menu"} className={"e-text-grey-400"} />
                    </ListItem>
                    <ListItem className={'dropdown-item'}>
                      <Text type={'a'} className={"e-text-grey-400"}>all</Text>
                    </ListItem>
                    <ListItem className={'dropdown-item'}>
                      <Text type={'a'} className={"e-text-grey-400"}>web design</Text>
                    </ListItem>
                    <ListItem className={'dropdown-item'}>
                      <Text type={'a'} className={"e-text-grey-400"}>logo design</Text>
                    </ListItem>
                    <ListItem className={'dropdown-item'}>
                      <Text type={'a'} className={"e-text-grey-400"}>ux/ui design</Text>
                    </ListItem>
                    <ListItem className={'dropdown-item'}>
                      <Text type={'a'} className={"e-text-grey-400"}>photography</Text>
                    </ListItem>
                  </Menu>

                  <List type={'inline'} className={'large-menu'}>
                    <ListItem className={'active'}>
                      <Text type={'a'} href={'#'} className={'e-text-uppercase e-text-blue-grey-300 e-text-center e-button'}>all</Text>
                    </ListItem>

                    <ListItem>
                      <Text type={'a'} href={'#'} className={'e-text-uppercase e-text-blue-grey-300 e-text-center e-button'}>web design</Text>
                    </ListItem>

                    <ListItem>
                      <Text type={'a'} href={'#'} className={'e-text-uppercase e-text-blue-grey-300 e-text-center e-button'}>logo design</Text>
                    </ListItem>

                    <ListItem>
                      <Text type={'a'} href={'#'} className={'e-text-uppercase e-text-blue-grey-300 e-text-center e-button'}>ux/ui design</Text>
                    </ListItem>

                    <ListItem>
                      <Text type={'a'} href={'#'} className={'e-text-uppercase e-text-blue-grey-300 e-text-center e-button'}>photography</Text>
                    </ListItem>
                  </List>

              </Block>
            </Block>

            <Block className={'e-container'}>
              <Paper className={'portfolio-container e-margin-bottom-25'}>

                <Block className={'left-column'}>
                  <Block className={'top-row'}>
                    <Block className={'left-col'}>
                      <Block className={'img-container e-no-margin e-no-padding'}>
                          <Image src={'../assets/img/tiger.jpg'} />
                          <Block className={'layer e-background-indigo-A400'}></Block>
                          <Block className={'text-container'}>
                            <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                              Steps of moving to self-employment
                            </Text>
                            <Block>
                              <List type={'inline'}>
                                <ListItem>
                                  <Icon name={"action-perm-identity"} className={"e-text-white"} />
                                  <Text type={'small'}>By: Razvan M.</Text>
                                </ListItem>
                                <ListItem>
                                  <Icon name={"av-album"} className={"e-text-white"} />
                                  <Text type={'small'}>March 10, 2016</Text>
                                </ListItem>
                              </List>
                            </Block>
                          </Block>
                      </Block>{/* end .img-container */}
                      <Block className={'img-container e-no-margin e-no-padding'}>
                          <Image src={'../assets/img/tiger.jpg'} />
                          <Block className={'layer e-background-indigo-A400'}></Block>
                          <Block className={'text-container'}>
                            <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                              Steps of moving to self-employment
                            </Text>
                            <Block>
                              <List type={'inline'}>
                                <ListItem>
                                  <Icon name={"action-perm-identity"} className={"e-text-white"} />
                                  <Text type={'small'}>By: Razvan M.</Text>
                                </ListItem>
                                <ListItem>
                                  <Icon name={"av-album"} className={"e-text-white"} />
                                  <Text type={'small'}>March 10, 2016</Text>
                                </ListItem>
                              </List>
                            </Block>
                          </Block>
                      </Block>{/* end .img-container */}
                      <Block className={'img-container e-no-margin e-no-padding'}>
                          <Image src={'../assets/img/tiger.jpg'} />
                          <Block className={'layer e-background-indigo-A400'}></Block>
                          <Block className={'text-container'}>
                            <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                              Steps of moving to self-employment
                            </Text>
                            <Block>
                              <List type={'inline'}>
                                <ListItem>
                                  <Icon name={"action-perm-identity"} className={"e-text-white"} />
                                  <Text type={'small'}>By: Razvan M.</Text>
                                </ListItem>
                                <ListItem>
                                  <Icon name={"av-album"} className={"e-text-white"} />
                                  <Text type={'small'}>March 10, 2016</Text>
                                </ListItem>
                              </List>
                            </Block>
                          </Block>
                      </Block>{/* end .img-container */}
                    </Block>{/*end .left-col*/}

                    <Block className={'right-col'}>
                      <Block className={'img-container e-no-margin e-no-padding'}>
                          <Image src={'../assets/img/tiger.jpg'} />
                          <Block className={'layer e-background-indigo-A400'}></Block>
                          <Block className={'text-container'}>
                            <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                              Steps of moving to self-employment
                            </Text>
                            <Block>
                              <List type={'inline'}>
                                <ListItem>
                                  <Icon name={"action-perm-identity"} className={"e-text-white"} />
                                  <Text type={'small'}>By: Razvan M.</Text>
                                </ListItem>
                                <ListItem>
                                  <Icon name={"av-album"} className={"e-text-white"} />
                                  <Text type={'small'}>March 10, 2016</Text>
                                </ListItem>
                              </List>
                            </Block>
                          </Block>
                      </Block>{/* end .img-container */}

                      <Block className={'img-container e-no-margin e-no-padding active'}>
                          <Image src={'../assets/img/tiger.jpg'} />
                          <Block className={'layer e-background-indigo-A400'}></Block>
                          <Block className={'text-container'}>
                            <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                              Steps of moving to self-employment
                            </Text>
                            <Block>
                              <List type={'inline'}>
                                <ListItem>
                                  <Icon name={"action-perm-identity"} className={"e-text-white"} />
                                  <Text type={'small'}>By: Razvan M.</Text>
                                </ListItem>
                                <ListItem>
                                  <Icon name={"av-album"} className={"e-text-white"} />
                                  <Text type={'small'}>March 10, 2016</Text>
                                </ListItem>
                              </List>
                            </Block>
                          </Block>
                      </Block>{/* end .img-container */}
                    </Block>{/*end .right-col*/}
                  </Block>{/*end .top-row*/}

                  <Block className={'bottom-row'}>
                    <Block className={'img-container e-no-margin e-no-padding'}>
                        <Image src={'../assets/img/ara.jpg'} />
                        <Block className={'layer e-background-indigo-A400'}></Block>
                        <Block className={'text-container'}>
                          <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                            Steps of moving to self-employment
                          </Text>
                          <Block>
                            <List type={'inline'}>
                              <ListItem>
                                <Icon name={"action-perm-identity"} className={"e-text-white"} />
                                <Text type={'small'}>By: Razvan M.</Text>
                              </ListItem>
                              <ListItem>
                                <Icon name={"av-album"} className={"e-text-white"} />
                                <Text type={'small'}>March 10, 2016</Text>
                              </ListItem>
                            </List>
                          </Block>
                        </Block>
                    </Block>{/* end .img-container */}
                  </Block>{/*end .bottom-row*/}
                </Block>{/*end .left-column */}
                <Block className={'right-column'}>
                  <Block className={'img-container e-no-margin e-no-padding'}>
                      <Image src={'../assets/img/lemon.jpg'} />
                      <Block className={'layer e-background-indigo-A400'}></Block>
                      <Block className={'text-container'}>
                        <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                          Steps of moving to self-employment
                        </Text>
                        <Block>
                          <List type={'inline'}>
                            <ListItem>
                              <Icon name={"action-perm-identity"} className={"e-text-white"} />
                              <Text type={'small'}>By: Razvan M.</Text>
                            </ListItem>
                            <ListItem>
                              <Icon name={"av-album"} className={"e-text-white"} />
                              <Text type={'small'}>March 10, 2016</Text>
                            </ListItem>
                          </List>
                        </Block>

                      </Block>
                  </Block>{/* end .img-container */}

                  <Block className={'img-container e-no-margin e-no-padding'}>
                      <Image src={'../assets/img/lemon.jpg'} />
                      <Block className={'layer e-background-indigo-A400'}></Block>
                      <Block className={'text-container'}>
                        <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                          Steps of moving to self-employment
                        </Text>
                        <Block>
                          <List type={'inline'}>
                            <ListItem>
                              <Icon name={"action-perm-identity"} className={"e-text-white"} />
                              <Text type={'small'}>By: Razvan M.</Text>
                            </ListItem>
                            <ListItem>
                              <Icon name={"av-album"} className={"e-text-white"} />
                              <Text type={'small'}>March 10, 2016</Text>
                            </ListItem>
                          </List>
                        </Block>
                      </Block>
                  </Block>{/* end .img-container */}

                  <Block className={'img-container e-no-margin e-no-padding'}>
                      <Image src={'../assets/img/lemon.jpg'} />
                      <Block className={'layer e-background-indigo-A400'}></Block>
                      <Block className={'text-container'}>
                        <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                          Steps of moving to self-employment
                        </Text>
                        <Block>
                          <List type={'inline'}>
                            <ListItem>
                              <Icon name={"action-perm-identity"} className={"e-text-white"} />
                              <Text type={'small'}>By: Razvan M.</Text>
                            </ListItem>
                            <ListItem>
                              <Icon name={"av-album"} className={"e-text-white"} />
                              <Text type={'small'}>March 10, 2016</Text>
                            </ListItem>
                          </List>
                        </Block>

                      </Block>
                  </Block>{/* end .img-container */}
                </Block> {/*end .right-column*/}

                {/* Here is a Listed Portfolio Style example.
                  Just delete .left-column and .right-column containers from above.*/}

                <Block className={'img-container e-no-margin e-no-padding fixed-box'}>
                    <Image src={'../assets/img/ara.jpg'} />
                    <Block className={'layer e-background-indigo-A400'}></Block>
                    <Block className={'text-container'}>
                      <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                        Steps of moving to self-employment
                      </Text>
                      <Block>
                        <List type={'inline'}>
                          <ListItem>
                            <Icon name={"action-perm-identity"} className={"e-text-white"} />
                            <Text type={'small'}>By: Razvan M.</Text>
                          </ListItem>
                          <ListItem>
                            <Icon name={"av-album"} className={"e-text-white"} />
                            <Text type={'small'}>March 10, 2016</Text>
                          </ListItem>
                        </List>
                      </Block>
                    </Block>
                </Block>{/* end .img-container */}

                <Block className={'img-container e-no-margin e-no-padding fixed-box'}>
                    <Image src={'../assets/img/tiger.jpg'} />
                    <Block className={'layer e-background-indigo-A400'}></Block>
                    <Block className={'text-container'}>
                      <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                        Steps of moving to self-employment
                      </Text>
                      <Block>
                        <List type={'inline'}>
                          <ListItem>
                            <Icon name={"action-perm-identity"} className={"e-text-white"} />
                            <Text type={'small'}>By: Razvan M.</Text>
                          </ListItem>
                          <ListItem>
                            <Icon name={"av-album"} className={"e-text-white"} />
                            <Text type={'small'}>March 10, 2016</Text>
                          </ListItem>
                        </List>
                      </Block>
                    </Block>
                </Block>{/* end .img-container */}

                <Block className={'img-container e-no-margin e-no-padding fixed-box active'}>
                    <Image src={'../assets/img/tiger.jpg'} />
                    <Block className={'layer e-background-indigo-A400'}></Block>
                    <Block className={'text-container'}>
                      <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                        Steps of moving to self-employment
                      </Text>
                      <Block>
                        <List type={'inline'}>
                          <ListItem>
                            <Icon name={"action-perm-identity"} className={"e-text-white"} />
                            <Text type={'small'}>By: Razvan M.</Text>
                          </ListItem>
                          <ListItem>
                            <Icon name={"av-album"} className={"e-text-white"} />
                            <Text type={'small'}>March 10, 2016</Text>
                          </ListItem>
                        </List>
                      </Block>
                    </Block>
                </Block>{/* end .img-container */}

                <Block className={'img-container e-no-margin e-no-padding fixed-box'}>
                    <Image src={'../assets/img/ara.jpg'} />
                    <Block className={'layer e-background-indigo-A400'}></Block>
                    <Block className={'text-container'}>
                      <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                        Steps of moving to self-employment
                      </Text>
                      <Block>
                        <List type={'inline'}>
                          <ListItem>
                            <Icon name={"action-perm-identity"} className={"e-text-white"} />
                            <Text type={'small'}>By: Razvan M.</Text>
                          </ListItem>
                          <ListItem>
                            <Icon name={"av-album"} className={"e-text-white"} />
                            <Text type={'small'}>March 10, 2016</Text>
                          </ListItem>
                        </List>
                      </Block>
                    </Block>
                </Block>{/* end .img-container */}

                <Block className={'img-container e-no-margin e-no-padding fixed-box'}>
                    <Image src={'../assets/img/tiger.jpg'} />
                    <Block className={'layer e-background-indigo-A400'}></Block>
                    <Block className={'text-container'}>
                      <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                        Steps of moving to self-employment
                      </Text>
                      <Block>
                        <List type={'inline'}>
                          <ListItem>
                            <Icon name={"action-perm-identity"} className={"e-text-white"} />
                            <Text type={'small'}>By: Razvan M.</Text>
                          </ListItem>
                          <ListItem>
                            <Icon name={"av-album"} className={"e-text-white"} />
                            <Text type={'small'}>March 10, 2016</Text>
                          </ListItem>
                        </List>
                      </Block>
                    </Block>
                </Block>{/* end .img-container */}

                <Block className={'img-container e-no-margin e-no-padding fixed-box'}>
                    <Image src={'../assets/img/tiger.jpg'} />
                    <Block className={'layer e-background-indigo-A400'}></Block>
                    <Block className={'text-container'}>
                      <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                        Steps of moving to self-employment
                      </Text>
                      <Block>
                        <List type={'inline'}>
                          <ListItem>
                            <Icon name={"action-perm-identity"} className={"e-text-white"} />
                            <Text type={'small'}>By: Razvan M.</Text>
                          </ListItem>
                          <ListItem>
                            <Icon name={"av-album"} className={"e-text-white"} />
                            <Text type={'small'}>March 10, 2016</Text>
                          </ListItem>
                        </List>
                      </Block>
                    </Block>
                </Block>{/* end .img-container */}

                <Block className={'img-container e-no-margin e-no-padding fixed-box'}>
                    <Image src={'../assets/img/lemon.jpg'} />
                    <Block className={'layer e-background-indigo-A400'}></Block>
                    <Block className={'text-container'}>
                      <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                        Steps of moving to self-employment
                      </Text>
                      <Block>
                        <List type={'inline'}>
                          <ListItem>
                            <Icon name={"action-perm-identity"} className={"e-text-white"} />
                            <Text type={'small'}>By: Razvan M.</Text>
                          </ListItem>
                          <ListItem>
                            <Icon name={"av-album"} className={"e-text-white"} />
                            <Text type={'small'}>March 10, 2016</Text>
                          </ListItem>
                        </List>
                      </Block>
                    </Block>
                </Block>{/* end .img-container */}

                <Block className={'img-container e-no-margin e-no-padding fixed-box'}>
                    <Image src={'../assets/img/tiger.jpg'} />
                    <Block className={'layer e-background-indigo-A400'}></Block>
                    <Block className={'text-container'}>
                      <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                        Steps of moving to self-employment
                      </Text>
                      <Block>
                        <List type={'inline'}>
                          <ListItem>
                            <Icon name={"action-perm-identity"} className={"e-text-white"} />
                            <Text type={'small'}>By: Razvan M.</Text>
                          </ListItem>
                          <ListItem>
                            <Icon name={"av-album"} className={"e-text-white"} />
                            <Text type={'small'}>March 10, 2016</Text>
                          </ListItem>
                        </List>
                      </Block>
                    </Block>
                </Block>{/* end .img-container */}

                <Block className={'img-container e-no-margin e-no-padding fixed-box'}>
                    <Image src={'../assets/img/tiger.jpg'} />
                    <Block className={'layer e-background-indigo-A400'}></Block>
                    <Block className={'text-container'}>
                      <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                        Steps of moving to self-employment
                      </Text>
                      <Block>
                        <List type={'inline'}>
                          <ListItem>
                            <Icon name={"action-perm-identity"} className={"e-text-white"} />
                            <Text type={'small'}>By: Razvan M.</Text>
                          </ListItem>
                          <ListItem>
                            <Icon name={"av-album"} className={"e-text-white"} />
                            <Text type={'small'}>March 10, 2016</Text>
                          </ListItem>
                        </List>
                      </Block>
                    </Block>
                </Block>{/* end .img-container */}

                <Block className={'img-container e-no-margin e-no-padding fixed-box'}>
                    <Image src={'../assets/img/tiger.jpg'} />
                    <Block className={'layer e-background-indigo-A400'}></Block>
                    <Block className={'text-container'}>
                      <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                        Steps of moving to self-employment
                      </Text>
                      <Block>
                        <List type={'inline'}>
                          <ListItem>
                            <Icon name={"action-perm-identity"} className={"e-text-white"} />
                            <Text type={'small'}>By: Razvan M.</Text>
                          </ListItem>
                          <ListItem>
                            <Icon name={"av-album"} className={"e-text-white"} />
                            <Text type={'small'}>March 10, 2016</Text>
                          </ListItem>
                        </List>
                      </Block>
                    </Block>
                </Block>{/* end .img-container */}

                <Block className={'img-container e-no-margin e-no-padding fixed-box'}>
                    <Image src={'../assets/img/tiger.jpg'} />
                    <Block className={'layer e-background-indigo-A400'}></Block>
                    <Block className={'text-container'}>
                      <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                        Steps of moving to self-employment
                      </Text>
                      <Block>
                        <List type={'inline'}>
                          <ListItem>
                            <Icon name={"action-perm-identity"} className={"e-text-white"} />
                            <Text type={'small'}>By: Razvan M.</Text>
                          </ListItem>
                          <ListItem>
                            <Icon name={"av-album"} className={"e-text-white"} />
                            <Text type={'small'}>March 10, 2016</Text>
                          </ListItem>
                        </List>
                      </Block>
                    </Block>
                </Block>{/* end .img-container */}

                <Block className={'img-container e-no-margin e-no-padding fixed-box'}>
                    <Image src={'../assets/img/ara.jpg'} />
                    <Block className={'layer e-background-indigo-A400'}></Block>
                    <Block className={'text-container'}>
                      <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                        Steps of moving to self-employment
                      </Text>
                      <Block>
                        <List type={'inline'}>
                          <ListItem>
                            <Icon name={"action-perm-identity"} className={"e-text-white"} />
                            <Text type={'small'}>By: Razvan M.</Text>
                          </ListItem>
                          <ListItem>
                            <Icon name={"av-album"} className={"e-text-white"} />
                            <Text type={'small'}>March 10, 2016</Text>
                          </ListItem>
                        </List>
                      </Block>
                    </Block>
                </Block>{/* end .img-container */}

                <Block className={'img-container e-no-margin e-no-padding fixed-box'}>
                    <Image src={'../assets/img/tiger.jpg'} />
                    <Block className={'layer e-background-indigo-A400'}></Block>
                    <Block className={'text-container'}>
                      <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                        Steps of moving to self-employment
                      </Text>
                      <Block>
                        <List type={'inline'}>
                          <ListItem>
                            <Icon name={"action-perm-identity"} className={"e-text-white"} />
                            <Text type={'small'}>By: Razvan M.</Text>
                          </ListItem>
                          <ListItem>
                            <Icon name={"av-album"} className={"e-text-white"} />
                            <Text type={'small'}>March 10, 2016</Text>
                          </ListItem>
                        </List>
                      </Block>
                    </Block>
                </Block>{/* end .img-container */}

                <Block className={'img-container e-no-margin e-no-padding fixed-box'}>
                    <Image src={'../assets/img/lemon.jpg'} />
                    <Block className={'layer e-background-indigo-A400'}></Block>
                    <Block className={'text-container'}>
                      <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                        Steps of moving to self-employment
                      </Text>
                      <Block>
                        <List type={'inline'}>
                          <ListItem>
                            <Icon name={"action-perm-identity"} className={"e-text-white"} />
                            <Text type={'small'}>By: Razvan M.</Text>
                          </ListItem>
                          <ListItem>
                            <Icon name={"av-album"} className={"e-text-white"} />
                            <Text type={'small'}>March 10, 2016</Text>
                          </ListItem>
                        </List>
                      </Block>
                    </Block>
                </Block>{/* end .img-container */}

                <Block className={'img-container e-no-margin e-no-padding fixed-box'}>
                    <Image src={'../assets/img/tiger.jpg'} />
                    <Block className={'layer e-background-indigo-A400'}></Block>
                    <Block className={'text-container'}>
                      <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                        Steps of moving to self-employment
                      </Text>
                      <Block>
                        <List type={'inline'}>
                          <ListItem>
                            <Icon name={"action-perm-identity"} className={"e-text-white"} />
                            <Text type={'small'}>By: Razvan M.</Text>
                          </ListItem>
                          <ListItem>
                            <Icon name={"av-album"} className={"e-text-white"} />
                            <Text type={'small'}>March 10, 2016</Text>
                          </ListItem>
                        </List>
                      </Block>
                    </Block>
                </Block>{/* end .img-container */}

                <Block className={'img-container e-no-margin e-no-padding fixed-box'}>
                    <Image src={'../assets/img/tiger.jpg'} />
                    <Block className={'layer e-background-indigo-A400'}></Block>
                    <Block className={'text-container'}>
                      <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                        Steps of moving to self-employment
                      </Text>
                      <Block>
                        <List type={'inline'}>
                          <ListItem>
                            <Icon name={"action-perm-identity"} className={"e-text-white"} />
                            <Text type={'small'}>By: Razvan M.</Text>
                          </ListItem>
                          <ListItem>
                            <Icon name={"av-album"} className={"e-text-white"} />
                            <Text type={'small'}>March 10, 2016</Text>
                          </ListItem>
                        </List>
                      </Block>
                    </Block>
                </Block>{/* end .img-container */}

                <Block className={'img-container e-no-margin e-no-padding fixed-box'}>
                    <Image src={'../assets/img/tiger.jpg'} />
                    <Block className={'layer e-background-indigo-A400'}></Block>
                    <Block className={'text-container'}>
                      <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                        Steps of moving to self-employment
                      </Text>
                      <Block>
                        <List type={'inline'}>
                          <ListItem>
                            <Icon name={"action-perm-identity"} className={"e-text-white"} />
                            <Text type={'small'}>By: Razvan M.</Text>
                          </ListItem>
                          <ListItem>
                            <Icon name={"av-album"} className={"e-text-white"} />
                            <Text type={'small'}>March 10, 2016</Text>
                          </ListItem>
                        </List>
                      </Block>
                    </Block>
                </Block>{/* end .img-container */}

                <Block className={'img-container e-no-margin e-no-padding fixed-box'}>
                    <Image src={'../assets/img/lemon.jpg'} />
                    <Block className={'layer e-background-indigo-A400'}></Block>
                    <Block className={'text-container'}>
                      <Text type={'span'} classes={'e-text-left e-title e-text-white'}>
                        Steps of moving to self-employment
                      </Text>
                      <Block>
                        <List type={'inline'}>
                          <ListItem>
                            <Icon name={"action-perm-identity"} className={"e-text-white"} />
                            <Text type={'small'}>By: Razvan M.</Text>
                          </ListItem>
                          <ListItem>
                            <Icon name={"av-album"} className={"e-text-white"} />
                            <Text type={'small'}>March 10, 2016</Text>
                          </ListItem>
                        </List>
                      </Block>
                    </Block>
                </Block>{/* end .img-container */}

                {/*end Listed Potfolio Style example */}

                <Block className={'load-more'}>
                  <Icon name={"navigation-refresh"} className={"e-text-grey-400"} />
                </Block>


              </Paper>
            </Block>

          </Block>
        );
    }
}

module.exports = MateriablePortfolio;
