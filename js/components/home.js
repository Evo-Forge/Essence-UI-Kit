import React from 'react';
import ClassNames from 'classnames';

import {Btn, AppBar, Block, Divider, Icon, Image, Text, Utils, Menu, List, ListItem, Paper} from 'react-essence';

class MateriableHome extends React.Component {

    render() {
        return (
            <Block className={'materiables-home'}>
              <Block className={'header e-text-center'}>
                  <Image src={'http://www.studiomatris.com/wp-content/uploads/2012/08/color_icon.png'} className={'e-margin-bottom-25'} height={'75px'} />
                  <Text type={'h1'} classes={'e-text-center e-display-3 adjust-h1-header e-margin-bottom-40'}>
                      meet yur new materiable theme
                  </Text>
                  <Block>
                      <Btn label={'BUY THEME'} ripple={false} type={'primary'} className={'raised e-margin-bottom-50 e-padding-left-right-20'} />
                      <Btn label={'CONTACT US'} ripple={false} type={'primary'} className={'raised e-margin-bottom-25 e-background-indigo-600'} />
                  </Block>
                  <Btn icon={'hardware-keyboard-arrow-down'} ripple={true} type={'primary'} className={'fab-mini e-text-white e-btn-fab adjust-fab-header e-background-pink-A200'} />
              </Block>

              {/*paper one*/}

              <Paper className={'main-one'}>
                <Block className={'e-container e-padding-top-25 e-padding-bottom-25 flex-container'}>
                    <Block className={'brick-4 adjust-brick-4-header'}>
                        <Text type={'h2'} classes={'e-text-center e-display-2 adjust-h2'}>
                            OUR SERVICE
                            </Text>
                            <Text type={'h5'} classes={'e-text-center e-body2 e-padding-left-right-40'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </Text>
                    </Block>
                    <Block className={'e-row flex-row e-margin-top-25'}>
                    <Block className={'brick-4 adjust-brick-4-middle '}>
                        <Block className={'radius-block e-text-center e-margin-bottom-15'}>
                            <Icon name={"editor-functions"} className={"e-text-blue-500"} />
                        </Block>
                        <Text type={'h4'} classes={'e-text-center e-title'}>
                            CLEAN MODERN CODE
                        </Text>
                        <Text type={'h5'} classes={'e-text-center e-body2 e-padding-left-right-50'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </Text>
                        <Text type={'a'} classes={'e-text-center e-button e-text-indigo-A400'}>MORE</Text>
                    </Block>
                    <Block className={'brick-4 adjust-brick-4-middle'}>
                        <Block className={'radius-block e-text-center e-margin-bottom-15'}>
                            <Icon name={"editor-functions"} className={"e-text-blue-500"} />
                        </Block>
                        <Text type={'h4'} classes={'e-text-center e-title'}>
                            CLEAN MODERN CODE
                        </Text>
                        <Text type={'h5'} classes={'e-text-center e-body2 e-padding-left-right-50'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </Text>
                        <Text type={'a'} classes={'e-text-center e-button e-text-indigo-A400'}>MORE</Text>
                    </Block>
                    <Block className={'brick-4 adjust-brick-4-middle'}>
                        <Block className={'radius-block e-text-center e-margin-bottom-15'}>
                            <Icon name={"editor-functions"} className={"e-text-blue-500"} />
                        </Block>
                        <Text type={'h4'} classes={'e-text-center e-title'}>
                            CLEAN MODERN CODE
                        </Text>
                        <Text type={'h5'} classes={'e-text-center e-body2 e-padding-left-right-50'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </Text>
                        <Text type={'a'} classes={'e-text-center e-button e-text-indigo-A400'}>MORE</Text>
                    </Block>
                    </Block>
                </Block>
              </Paper>

              {/*block two*/}

              <Block className={'main-two'}>
                <Block className={'e-container e-padding-top-25 e-padding-bottom-25 flex-container'}>
                    <Block className={'brick-4 adjust-brick-4-header'}>
                    <Text type={'h2'} classes={'e-text-center e-display-2 adjust-h2'}>
                        LATEST POST
                    </Text>
                    <Text type={'h5'} classes={'e-text-center e-body2 e-padding-left-right-40'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </Text>
                    </Block>

                    <Block className={'e-row flex-row e-margin-top-25'}>
                        <Block className={'brick-4 adjust-brick-4-articles '}>
                        <Block className={'top-article'}>
                            <Image src={'http://d1dzqwexhp5ztx.cloudfront.net/imageRepo/4/0/62/801/836/1a-012954_A.jpg'} alt={'Star Wars'} classes={'e-left'}/>
                            <Block classes={'contents e-padding-left-right-20-15'}>
                                <Text classes={'first'}>Steps of moving to self-employment</Text>
                                <Text classes={'second'}>Jan 9, 2016</Text>
                            </Block>
                        </Block>
                            <Divider classes={'thin long adjust-long e-background-grey-500'} />
                            <Block className={'bottom-article'}>
                                <Image src={'http://d1dzqwexhp5ztx.cloudfront.net/imageRepo/4/0/62/801/836/1a-012954_A.jpg'} alt={'Star Wars'} classes={'e-left'}/>
                                <Block classes={'contents'}>
                                    <Text classes={'first'}>Steps of moving to self-employment</Text>
                                    <Text classes={'second'}>Jan 9, 2016</Text>
                                </Block>
                            </Block>
                        </Block>

                        <Block className={'brick-4 adjust-brick-4-articles '}>
                        <Block className={'top-article'}>
                            <Image src={'http://d1dzqwexhp5ztx.cloudfront.net/imageRepo/4/0/62/801/836/1a-012954_A.jpg'} alt={'Star Wars'} classes={'e-left'}/>
                            <Block classes={'contents e-padding-left-right-20-15'}>
                                <Text classes={'first'}>Steps of moving to self-employment</Text>
                                <Text classes={'second'}>Jan 9, 2016</Text>
                            </Block>
                        </Block>
                            <Divider classes={'thin long adjust-long e-background-grey-500'} />
                            <Block className={'bottom-article'}>
                                <Image src={'http://d1dzqwexhp5ztx.cloudfront.net/imageRepo/4/0/62/801/836/1a-012954_A.jpg'} alt={'Star Wars'} classes={'e-left'}/>
                                <Block classes={'contents'}>
                                    <Text classes={'first'}>Steps of moving to self-employment</Text>
                                    <Text classes={'second'}>Jan 9, 2016</Text>
                                </Block>
                            </Block>
                        </Block>

                        <Block className={'brick-4 adjust-brick-4-articles '}>
                            <List type={'navigation'} classes={'e-twolinelist'}>
                                <ListItem className={'top-list e-margin-bottom-15'}>
                                    <Text type={'a'}>
                                        <Image src={'http://d1dzqwexhp5ztx.cloudfront.net/imageRepo/4/0/62/801/836/1a-012954_A.jpg'} alt={'Star Wars'} classes={'e-left'}/>
                                        <Block classes={'content e-left'}>
                                            <Text classes={'primary'}>Steps of moving to self-employment</Text>
                                            <Text classes={'secondary'}>Jan 9, 2016</Text>
                                        </Block>
                                    </Text>
                                </ListItem>
                                <Divider classes={'thin long adjust-long e-background-grey-500'} />
                                <List type={'navigation'} classes={'e-twolinelist'}>
                                    <ListItem>
                                        <Text type={'a'}>
                                            <Image src={'http://d1dzqwexhp5ztx.cloudfront.net/imageRepo/4/0/62/801/836/1a-012954_A.jpg'} alt={'Star Wars'} classes={'e-left'}/>
                                            <Block classes={'content e-left'}>
                                                <Text classes={'primary'}>10 Important Steps During Logo Designing</Text>
                                                <Text classes={'secondary'}>Jan 9, 2016</Text>
                                            </Block>
                                        </Text>
                                    </ListItem>
                                </List>
                            </List>
                        </Block>
                    </Block>
                    <Btn label={'SEE MORE'} ripple={false} type={'primary'} className={'raised align-self-class e-margin-top-50'} />
                </Block>
              </Block>

              {/*block three*/}
              <Block className={'main-three'}>
                  <Block className={'e-container e-padding-top-25 e-padding-bottom-25 flex-container'}>
                      <Block className={'brick-4 adjust-brick-4-header'}>
                          <Text type={'h2'} classes={'e-text-center e-display-2 adjust-h2-paper'}>
                              OUR SERVICE
                              </Text>
                              <Text type={'h5'} classes={'e-text-center e-body2 e-padding-left-right-40 adjust-h5-paper'}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                              </Text>
                      </Block>
                      <Block className={'e-row adjust-e-row-paper e-margin-top-50'}>
                        <Block className={'e-brick-4 adjust-e-brick-3'}>
                            <Paper className={'e-text-indigo-400 e-background-white adjust-height' }>
                                <Image src='https://lh5.googleusercontent.com/-N3pGPW0MCdc/AAAAAAAAAAI/AAAAAAAADAY/-QnH-44a7wU/photo.jpg'/>
                                </Paper>
                        </Block>
                        <Block className={'e-brick-4 adjust-e-brick-3'}>
                            <Paper className={'e-text-indigo-400 e-background-white adjust-height' }>
                                <Image src='https://lh5.googleusercontent.com/-N3pGPW0MCdc/AAAAAAAAAAI/AAAAAAAADAY/-QnH-44a7wU/photo.jpg'/>
                                </Paper>
                        </Block>
                        <Block className={'e-brick-4 adjust-e-brick-3'}>
                            <Paper className={'e-text-indigo-400 e-background-white adjust-height' }>
                                <Image src='https://lh5.googleusercontent.com/-N3pGPW0MCdc/AAAAAAAAAAI/AAAAAAAADAY/-QnH-44a7wU/photo.jpg'/>
                                </Paper>
                        </Block>
                        <Block className={'e-brick-4 adjust-e-brick-3'}>
                            <Paper className={'e-text-indigo-400 e-background-white adjust-height' }>
                                <Image src='https://lh5.googleusercontent.com/-N3pGPW0MCdc/AAAAAAAAAAI/AAAAAAAADAY/-QnH-44a7wU/photo.jpg'/>
                                </Paper>
                        </Block>
                        <Block className={'e-brick-4 adjust-e-brick-3'}>
                            <Paper className={'e-text-indigo-400 e-background-white adjust-height' }>
                                <Image src='https://lh5.googleusercontent.com/-N3pGPW0MCdc/AAAAAAAAAAI/AAAAAAAADAY/-QnH-44a7wU/photo.jpg'/>
                                </Paper>
                        </Block>
                        <Block className={'e-brick-4 adjust-e-brick-3'}>
                            <Paper className={'e-text-indigo-400 e-background-white adjust-height' }>
                                <Image src='https://lh5.googleusercontent.com/-N3pGPW0MCdc/AAAAAAAAAAI/AAAAAAAADAY/-QnH-44a7wU/photo.jpg'/>
                                </Paper>
                        </Block>
                        <Block className={'e-brick-4 adjust-e-brick-3'}>
                            <Paper className={'e-text-indigo-400 e-background-white adjust-height' }>
                                <Image src='https://lh5.googleusercontent.com/-N3pGPW0MCdc/AAAAAAAAAAI/AAAAAAAADAY/-QnH-44a7wU/photo.jpg'/>
                                </Paper>
                        </Block>
                        <Block className={'e-brick-4 adjust-e-brick-3'}>
                            <Paper className={'e-text-indigo-400 e-background-white adjust-height' }>
                                <Image src='https://lh5.googleusercontent.com/-N3pGPW0MCdc/AAAAAAAAAAI/AAAAAAAADAY/-QnH-44a7wU/photo.jpg'/>
                                </Paper>
                        </Block>
                      </Block>
                 </Block>
              </Block>

              {/*paper one*/}

              <Paper className={'main-one'}>
                <Block className={'e-container e-padding-top-25 e-padding-bottom-25 flex-container'}>
                    <Block className={'brick-4 adjust-brick-4-header'}>
                        <Text type={'h2'} classes={'e-text-center e-display-2 adjust-h2'}>
                            OUR SERVICE
                            </Text>
                            <Text type={'h5'} classes={'e-text-center e-body2 e-padding-left-right-40'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </Text>
                    </Block>
                    <Block className={'e-row flex-row e-margin-top-25'}>
                    <Block className={'brick-4 adjust-brick-4-middle '}>
                        <Block className={'radius-block e-text-center e-margin-bottom-15'}>
                            <Icon name={"editor-functions"} className={"e-text-blue-500"} />
                        </Block>
                        <Text type={'h4'} classes={'e-text-center e-title'}>
                            CLEAN MODERN CODE
                        </Text>
                        <Text type={'h5'} classes={'e-text-center e-body2 e-padding-left-right-50'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </Text>
                        <Text type={'a'} classes={'e-text-center e-button e-text-indigo-A400'}>MORE</Text>
                    </Block>
                    <Block className={'brick-4 adjust-brick-4-middle'}>
                        <Block className={'radius-block e-text-center e-margin-bottom-15'}>
                            <Icon name={"editor-functions"} className={"e-text-blue-500"} />
                        </Block>
                        <Text type={'h4'} classes={'e-text-center e-title'}>
                            CLEAN MODERN CODE
                        </Text>
                        <Text type={'h5'} classes={'e-text-center e-body2 e-padding-left-right-50'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </Text>
                        <Text type={'a'} classes={'e-text-center e-button e-text-indigo-A400'}>MORE</Text>
                    </Block>
                    <Block className={'brick-4 adjust-brick-4-middle'}>
                        <Block className={'radius-block e-text-center e-margin-bottom-15'}>
                            <Icon name={"editor-functions"} className={"e-text-blue-500"} />
                        </Block>
                        <Text type={'h4'} classes={'e-text-center e-title'}>
                            CLEAN MODERN CODE
                        </Text>
                        <Text type={'h5'} classes={'e-text-center e-body2 e-padding-left-right-50'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </Text>
                        <Text type={'a'} classes={'e-text-center e-button e-text-indigo-A400'}>MORE</Text>
                    </Block>
                    </Block>
                </Block>
              </Paper>

            </Block>
        );
    }
}

module.exports = MateriableHome;
