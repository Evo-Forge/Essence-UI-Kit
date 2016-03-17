import React from 'react';
import ClassNames from 'classnames';

import {Btn, AppBar, Block, Divider, Icon, Image, Input, Text, Utils, Menu, List, ListItem, Paper} from 'react-essence';

class MateriableHome extends React.Component {

    render() {
        return (
            <Block className={'materiables-home'} id={'home'}>
              <Block className={'header e-text-center'}>
                  <Image src={'http://www.studiomatris.com/wp-content/uploads/2012/08/color_icon.png'} className={'e-margin-bottom-25'} height={'75px'} />
                  <Text type={'h1'} classes={'e-text-center e-display-3 adjust-h1-header e-margin-bottom-40'}>
                      meet your new materiable theme
                  </Text>
                  <Block>
                      <Btn label={'BUY THEME'} ripple={true} type={'primary'} className={'raised e-margin-bottom-50 e-padding-left-right-20'} />
                      <Btn label={'CONTACT US'} ripple={true} type={'primary'} className={'raised e-margin-bottom-25 e-background-indigo-600'} />
                  </Block>
                  <Block className={'buttons-for-slider'}>
                    <ul className={'slider'}>
                        <li></li>
                        <li></li>
                        <li className={'selected'}></li>
                        <li></li>
                    </ul>
                  </Block>
                  <Text type={'a'} href={'#footer'} className={'adjust-a-fab'}>
                    <Btn icon={'hardware-keyboard-arrow-down'} ripple={true} type={'primary'} className={'fab-mini e-text-white e-btn-fab adjust-fab-header e-background-pink-A200'} />
                  </Text>
              </Block>

              {/*paper one*/}

              <Paper className={'main-one e-background-grey-100'}>
                <Block className={'e-container e-padding-top-50 e-padding-bottom-50 flex-container'}>
                    <Block className={'brick-4 adjust-brick-4-header'}>
                        <Text type={'h2'} classes={'e-text-center e-display-2 adjust-h2'}>
                            OUR SERVICE
                            </Text>
                            <Text type={'h5'} classes={'e-text-center e-body2 e-padding-left-right-40'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </Text>
                    </Block>
                    <Block className={'e-row flex-row e-margin-top-50'}>
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
                        <Btn label={'MORE'} ripple={true} className={'flat e-text-white e-text-center e-button e-background-grey-100 e-margin-top-25 e-text-blue-500'} />
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
                        <Btn label={'MORE'} ripple={true} className={'flat e-text-white e-text-center e-button e-background-grey-100 e-margin-top-25 e-text-blue-500'} />
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
                        <Btn label={'MORE'} ripple={true} className={'flat e-text-white e-text-center e-button e-background-grey-100 e-margin-top-25 e-text-blue-500'} />
                    </Block>
                    </Block>
                </Block>
              </Paper>

              {/*block two*/}

              <Block className={'main-two'}>
                <Block className={'e-container e-padding-top-50 e-padding-bottom-50 flex-container'}>
                    <Block className={'brick-4 adjust-brick-4-header'}>
                    <Text type={'h2'} classes={'e-text-center e-display-2 adjust-h2'}>
                        LATEST POST
                    </Text>
                    <Text type={'h5'} classes={'e-text-center e-body2 e-padding-left-right-40'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </Text>
                    </Block>

                    <Block className={'e-row flex-row e-margin-top-50'}>
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
                    </Block>
                    <Btn label={'SEE MORE'} ripple={true} type={'primary'} className={'raised align-self-class e-margin-top-50'} />
                </Block>
              </Block>

              {/*block three*/}
              <Block className={'main-three'}>
                  <Block className={'e-container e-padding-top-50 e-padding-bottom-50 flex-container'}>
                      <Block className={'brick-4 adjust-brick-4-header'}>
                          <Text type={'h2'} classes={'e-text-center e-display-2 adjust-h2-paper'}>
                              Latest Projects
                              </Text>
                              <Text type={'h5'} classes={'e-text-center e-body2  adjust-h5-paper'}>
                              Lorem ipsum dolor sit amet, vitae erat, libero neque vehicula, eius aliquam donec euismod diam, ante mi convallis
                              maecenas turpis.
                              </Text>
                      </Block>
                      <Block className={'e-row adjust-e-row-paper e-margin-top-50'}>
                        <Block className={'fix-photo adjust-e-brick-4'}>
                            <Paper className={'e-text-indigo-400 e-background-white adjust-height' }>
                                <Image src='../assets/img/photo1.jpg'/>
                                <Block className={'layer e-background-indigo-A400'}></Block>
                                <Text type={'h5'} classes={'e-body2 e-text-white adjust-h-onImage'}>
                                  sit amet, vitae erat, libero neque vehicula, eius aliquam donec euismod
                                </Text>
                            </Paper>
                        </Block>
                        <Block className={'fix-photo adjust-e-brick-4'}>
                            <Paper className={'e-text-indigo-400 e-background-white adjust-height' }>
                                <Image src='../assets/img/photo2.jpg'/>
                                <Block className={'layer e-background-indigo-A400'}></Block>
                                    <Text type={'h5'} classes={'e-body2 e-text-white adjust-h-onImage'}>
                                      sit amet, vitae erat, libero neque vehicula, eius aliquam donec euismod
                                </Text>
                            </Paper>
                        </Block>
                        <Block className={'fix-photo adjust-e-brick-4'}>
                            <Paper className={'e-text-indigo-400 e-background-white adjust-height' }>
                                <Image src='../assets/img/photo3.png'/>
                                <Block className={'layer e-background-indigo-A400'}></Block>
                                    <Text type={'h5'} classes={'e-body2 e-text-white adjust-h-onImage'}>
                                      sit amet, vitae erat, libero neque vehicula, eius aliquam donec euismod
                                </Text>
                            </Paper>
                        </Block>
                        <Block className={'fix-photo adjust-e-brick-4'}>
                            <Paper className={'e-text-indigo-400 e-background-white adjust-height' }>
                                <Image src='../assets/img/photo4.jpg'/>
                                <Block className={'layer e-background-indigo-A400'}></Block>
                                    <Text type={'h5'} classes={'e-body2 e-text-white adjust-h-onImage'}>
                                      sit amet, vitae erat, libero neque vehicula, eius aliquam donec euismod
                                </Text>
                            </Paper>
                        </Block>
                        <Block className={'fix-photo adjust-e-brick-4'}>
                            <Paper className={'e-text-indigo-400 e-background-white adjust-height' }>
                                <Image src='../assets/img/photo5.jpg'/>
                                <Block className={'layer e-background-indigo-A400'}></Block>
                                    <Text type={'h5'} classes={'e-body2 e-text-white adjust-h-onImage'}>
                                      sit amet, vitae erat, libero neque vehicula, eius aliquam donec euismod
                                </Text>
                            </Paper>
                        </Block>
                        <Block className={'fix-photo adjust-e-brick-4'}>
                            <Paper className={'e-text-indigo-400 e-background-white adjust-height' }>
                                <Image src='../assets/img/photo4.jpg'/>
                                <Block className={'layer e-background-indigo-A400'}></Block>
                                    <Text type={'h5'} classes={'e-body2 e-text-white adjust-h-onImage'}>
                                      sit amet, vitae erat, libero neque vehicula, eius aliquam donec euismod
                                </Text>
                            </Paper>
                        </Block>
                        <Block className={'fix-photo adjust-e-brick-4'}>
                            <Paper className={'e-text-indigo-400 e-background-white adjust-height' }>
                                <Image src='../assets/img/photo1.jpg'/>
                                <Block className={'layer e-background-indigo-A400'}></Block>
                                    <Text type={'h5'} classes={'e-body2 e-text-white adjust-h-onImage'}>
                                      sit amet, vitae erat, libero neque vehicula, eius aliquam donec euismod
                                </Text>
                            </Paper>
                        </Block>
                        <Block className={'fix-photo adjust-e-brick-4'}>
                            <Paper className={'e-text-indigo-400 e-background-white adjust-height' }>
                                <Image src='../assets/img/photo2.jpg'/>
                                <Block className={'layer e-background-indigo-A400'}></Block>
                                    <Text type={'h5'} classes={'e-body2 e-text-white adjust-h-onImage'}>
                                      sit amet, vitae erat, libero neque vehicula, eius aliquam donec euismod
                                </Text>
                            </Paper>
                        </Block>
                        <Block className={'fix-photo div-buttons-m3'}>
                            <Btn label={'MORE WORK'} ripple={true} className={'raised e-background-pink-A200 e-text-white adjust-bloc-three-buttons e-margin-top-50'} />
                            <Btn label={'CONTACT US'} ripple={true} className={'raised e-background-grey-800 e-text-white adjust-bloc-three-buttons e-margin-top-50'} />
                        </Block>
                      </Block>
                 </Block>
              </Block>

              {/*block four*/}

              <Block className={'main-four'}>
                <Block className={'e-container e-padding-top-50 e-padding-bottom-50 flex-container'}>
                    <Block className={'brick-4 adjust-brick-4-header'}>
                        <Text type={'h2'} classes={'e-text-center e-display-2 adjust-h2'}>
                            OUR SERVICE
                            </Text>
                            <Text type={'h5'} classes={'e-text-center e-body2 '}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </Text>
                    </Block>
                    <Block className={'e-row flex-row e-margin-top-50'}>
                    <Block className={'brick-4 adjust-brick-4-middle '}>
                        <Block className={'radius-block e-text-center e-margin-bottom-15 e-background-grey-500'}>
                            <Icon name={"image-timer-auto"} className={"e-text-grey-200"} />
                        </Block>
                        <Text type={'h4'} classes={'e-text-center e-title'}>
                            H.Rackham
                        </Text>
                        <Text type={'h5'} classes={'e-text-center e-body2 e-padding-left-right-50 e-margin-bottom-15'}>
                            Concept Strategist
                        </Text>
                        <Text type={'h5'} classes={'e-text-center e-body2 e-padding-left-right-50'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </Text>
                        <Block>
                            <Text type={'a'} classes={'e-text-center e-button e-margin-right-8'}><Icon name={"action-android"} className={"e-text-grey-600"} /></Text>
                            <Text type={'a'} classes={'e-text-center e-button e-margin-right-8'}><Icon name={"social-share"} className={"e-text-grey-600"} /></Text>
                            <Text type={'a'} classes={'e-text-center e-button e-margin-right-8'}><Icon name={"hardware-cast-connected"} className={"e-text-grey-600"} /></Text>
                            <Text type={'a'} classes={'e-text-center e-button e-margin-right-8'}><Icon name={"device-bluetooth-connected"} className={"e-text-grey-600"} /></Text>
                        </Block>
                        <Block>
                            <Btn label={'HIRE ME'} ripple={true} className={'flat e-text-white e-text-center e-button e-background-white e-margin-top-25 e-text-grey-500 e-margin-right-25'} />
                            <Btn label={'MORE'} ripple={true} className={'flat e-text-white e-text-center e-button e-background-white e-margin-top-25 e-text-blue-500'} />
                        </Block>
                    </Block>
                    <Block className={'brick-4 adjust-brick-4-middle'}>
                        <Block className={'radius-block e-text-center e-margin-bottom-15 e-background-grey-500'}>
                            <Icon name={"image-timer-auto"} className={"e-text-grey-200"} />
                        </Block>
                        <Text type={'h4'} classes={'e-text-center e-title'}>
                            leonardo J.Kem
                        </Text>
                        <Text type={'h5'} classes={'e-text-center e-body2 e-padding-left-right-50 e-margin-bottom-15'}>
                            Graphic Designer
                        </Text>
                        <Text type={'h5'} classes={'e-text-center e-body2 e-padding-left-right-50'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </Text>
                        <Block>
                            <Text type={'a'} classes={'e-text-center e-button e-margin-right-8'}><Icon name={"action-android"} className={"e-text-grey-600"} /></Text>
                            <Text type={'a'} classes={'e-text-center e-button e-margin-right-8'}><Icon name={"social-share"} className={"e-text-grey-600"} /></Text>
                            <Text type={'a'} classes={'e-text-center e-button e-margin-right-8'}><Icon name={"hardware-cast-connected"} className={"e-text-grey-600"} /></Text>
                            <Text type={'a'} classes={'e-text-center e-button e-margin-right-8'}><Icon name={"device-bluetooth-connected"} className={"e-text-grey-600"} /></Text>
                        </Block>
                        <Block>
                            <Btn label={'HIRE ME'} ripple={true} className={'flat e-text-white e-text-center e-button e-background-white e-margin-top-25 e-text-grey-500 e-margin-right-25'} />
                            <Btn label={'MORE'} ripple={true} className={'flat e-text-white e-text-center e-button e-background-white e-margin-top-25 e-text-blue-500'} />
                        </Block>
                    </Block>
                    <Block className={'brick-4 adjust-brick-4-middle'}>
                        <Block className={'radius-block e-text-center e-margin-bottom-15 e-background-grey-500'}>
                            <Icon name={"image-timer-auto"} className={"e-text-grey-200"} />
                        </Block>
                            <Text type={'h4'} classes={'e-text-center e-title'}>
                                Cicero poyment
                            </Text>
                            <Text type={'h5'} classes={'e-text-center e-body2 e-padding-left-right-50 e-margin-bottom-15'}>
                                Creative Director
                            </Text>
                            <Text type={'h5'} classes={'e-text-center e-body2 e-padding-left-right-50'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </Text>
                        <Block>
                            <Text type={'a'} classes={'e-text-center e-button e-margin-right-8 adjust-a'}><Icon name={"action-android"} className={"e-text-grey-600"} /></Text>
                            <Text type={'a'} classes={'e-text-center e-button e-margin-right-8'}><Icon name={"social-share"} className={"e-text-grey-600"} /></Text>
                            <Text type={'a'} classes={'e-text-center e-button e-margin-right-8'}><Icon name={"hardware-cast-connected"} className={"e-text-grey-600"} /></Text>
                            <Text type={'a'} classes={'e-text-center e-button e-margin-right-8'}><Icon name={"device-bluetooth-connected"} className={"e-text-grey-600"} /></Text>
                        </Block>
                        <Block>
                            <Btn label={'HIRE ME'} ripple={true} className={'flat e-text-white e-text-center e-button e-background-white e-margin-top-25 e-text-grey-500 e-margin-right-25'} />
                            <Btn label={'MORE'} ripple={true} className={'flat e-text-white e-text-center e-button e-background-white e-margin-top-25 e-text-blue-500'} />
                        </Block>
                    </Block>
                    </Block>
                </Block>
              </Block>

              {/*block five*/}

              <Block className={'main-five e-background-indigo-500'}>
                <Block className={'e-container e-padding-top-50 e-padding-bottom-50 flex-container'}>
                    <Block className={'brick-4 adjust-brick-4-header'}>
                        <Text type={'h2'} classes={'e-text-center e-display-2 adjust-h2 e-text-white'}>
                            OUR SERVICE
                            </Text>
                            <Text type={'h5'} classes={'e-text-center e-body2 e-text-white'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </Text>
                    </Block>
                    <Block className={'e-row flex-row e-margin-top-50'}>
                    <Block className={'brick-4 adjust-brick-4-middle '}>
                        <Block className={'icon-block e-text-center e-margin-top-25 e-background-indigo-500'}>
                            <Icon name={"device-now-wallpaper"} className={"e-text-white"} />
                        </Block>
                        <Text type={'h3'} classes={'e-text-center e-display-4 e-padding-left-right-50 e-text-white'}>
                            0200
                        </Text>
                        <Text type={'h4'} classes={'e-text-center e-title e-text-white'}>
                            H.Rackham
                        </Text>
                        <Text type={'h5'} classes={'e-text-center e-body2 e-padding-left-right-50 e-text-white'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </Text>
                    </Block>
                    <Block className={'brick-4 adjust-brick-4-middle'}>
                        <Block className={'icon-block e-text-center e-margin-top-25 e-background-indigo-500'}>
                            <Icon name={"maps-local-cafe"} className={"e-text-white"} />
                        </Block>
                        <Text type={'h3'} classes={'e-text-center e-display-4 e-padding-left-right-50 e-text-white'}>
                            2223
                        </Text>
                        <Text type={'h4'} classes={'e-text-center e-title e-text-white'}>
                            leonardo J.Kem
                        </Text>
                        <Text type={'h5'} classes={'e-text-center e-body2 e-padding-left-right-50 e-text-white'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </Text>
                    </Block>
                    <Block className={'brick-4 adjust-brick-4-middle'}>
                        <Block className={'icon-block e-text-center e-margin-top-25 e-background-indigo-500'}>
                            <Icon name={"action-subject"} className={"e-text-white"} />
                        </Block>
                            <Text type={'h3'} classes={'e-text-center e-display-4 e-padding-left-right-50 e-text-white'}>
                                3022
                            </Text>
                            <Text type={'h4'} classes={'e-text-center e-title e-text-white'}>
                                Cicero poyment
                            </Text>

                            <Text type={'h5'} classes={'e-text-center e-body2 e-padding-left-right-50 e-text-white'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </Text>
                    </Block>
                    </Block>
                </Block>
              </Block>

              {/*block six*/}

              <Block className={'main-six e-background-light-blue-A400'}>
                <Block className={'e-container e-padding-top-50 e-padding-bottom-50 flex-container'}>
                        <Block className={'brick-4 adjust-brick-4-header e-margin-bottom-50'}>
                            <Text type={'h2'} classes={'e-text-center e-display-2 adjust-h2 e-text-white'}>
                                OUR SERVICE
                                </Text>
                                <Text type={'h5'} classes={'e-text-center e-body2 e-text-white'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                </Text>
                        </Block>
                        <Block className={'adjust-white-block'}>
                            <Block className={'e-background-white adjust-block-six-content e-margin-bottom-15'}>
                                <Text classes={'e-text-grey-600'}>
                                    <Text type={'a'} classes={'e-text-center e-text-light-blue-A400'}>@Toriom </Text>Lorem ipsum dolor sit amet,
                                     vitae erat, libero neque vehicula, eius aliquam donec euismod diam, ante mi convallis maecenas turpis,
                                      sit feugiat parturient tristique et fermentum.<Text type={'a'} classes={'e-text-center e-text-grey-600'}> #theme</Text>
                                </Text>

                            </Block>
                            <Text className={'e-text-white adjust-time-post'}>
                                <Icon name={"device-access-time"} className={"e-text-white"} /> 15 minutes ago
                            </Text>
                        </Block>
                        <Block className={'adjust-white-block'}>
                            <Block className={'e-background-white adjust-block-six-content e-margin-bottom-15'}>
                                <Text classes={'e-text-grey-600'}>
                                    <Text type={'a'} classes={'e-text-center e-text-light-blue-A400'}>@Toriom </Text>Lorem ipsum dolor sit amet,
                                     vitae erat, libero neque vehicula, eius aliquam donec euismod diam, ante mi convallis maecenas turpis,
                                      sit feugiat parturient tristique et fermentum.<Text type={'a'} classes={'e-text-center e-text-grey-600'}> #theme</Text>
                                </Text>

                            </Block>
                            <Text className={'e-text-white adjust-time-post'}>
                                <Icon name={"device-access-time"} className={"e-text-white"} /> 15 minutes ago
                            </Text>
                        </Block>
                        <Text type={'a'} className={'twit-font-size e-margin-top-25'}><Icon name={"social-share"} className={"e-text-blue-100"} /></Text>
                </Block>
              </Block>

               {/*block seven*/}

               <Block className={'main-seven e-background-indigo-A200'}>
                 <Block className={'e-container'}>
                   <Paper className={'e-margin-top-50 padding-50 e-background-white container'}>
                     <Block classes={'e-row'}>
                       <Block classes={'brick brick-6 adjust-brick-6-m7'}>
                         <Text type={'h2'} classes={'e-text-left e-text-grey-800 e-text-uppercase e-headline'}>
                           send a message
                         </Text>
                         <Block>
                           <Icon name={"social-person"} className={"e-text-grey-800"} />
                           <Input type={'text'} name={'label'} label={'Your name'} />
                         </Block>
                         <Block>
                           <Icon name={"communication-email"} className={"e-text-grey-800 "} />
                           <Input type={'email'} name={'label'} label={'Your email'} />
                         </Block>
                         <Block>
                           <Icon name={"social-whatshot"} className={"e-text-grey-800 "} />
                           <Input type={'text'} name={'label'} label={'Your job'} />
                         </Block>
                         <Block>
                           <Icon name={"communication-messenger"} className={"e-text-grey-800 "} />
                           <Input type={'text'} name={'label'} label={'Your message'} />
                         </Block>
                         <Btn label={'Send message'} ripple={true} type={'primary'} className={'flat e-background-white e-text-blue-600 e-right'} />
                         <Btn label={'Clear'} ripple={true} type={'primary'} className={'flat e-background-white e-text-grey-800 e-right'} />
                       </Block>
                       <Block classes={'brick brick-6 adjust-brick-6-m7'}>
                           <Text type={'h2'} classes={'e-text-left e-text-grey-800 e-text-uppercase e-headline'}>
                             get social
                           </Text>
                           <Btn icon={'action-accessibility'} ripple={true} type={'fab'} className={'fab e-text-white e-background-grey-400'} />
                           <Btn icon={'action-info-outline'} ripple={true} type={'fab'} className={'fab e-text-white e-background-grey-400'} />
                           <Btn icon={'action-loyalty'} ripple={true} type={'fab'} className={'fab e-text-white e-background-grey-400'} />
                           <Btn icon={'action-thumb-up'} ripple={true} type={'fab'} className={'fab e-text-white e-background-grey-400'} />
                           <Btn icon={'av-timer'} ripple={true} type={'fab'} className={'fab e-text-white e-background-grey-400'} />
                           <Block classes={'contact-info'}>
                             <Text type={'h2'} classes={'e-text-left e-text-grey-800 e-text-uppercase e-headline  adjust-brick-6-m7'}>
                               contact info
                             </Text>
                             <Text type={'p'} classes={'e-text-left e-body1'}>
                               Section 1.10.33 of de Finibus
                               Bonorum et malorum sk
                               9002 st.
                             </Text>
                             <Text type={'p'} classes={'e-text-left e-body1'}>
                               +3321 1123 456227
                             </Text>
                             <Text type={'p'} classes={'e-text-left e-body1'}>
                               +3321 1123 456227
                             </Text>
                           </Block>
                       </Block>
                     </Block>
                   </Paper>
                 </Block>
                 {/*<Btn icon={'hardware-keyboard-arrow-down'} ripple={true} type={'fab'} className={'fab e-text-white e-btn-fab adjust-fab-header e-background-pink-A200'} />*/}
               </Block>

               {/*block eight*/}

               <Block className={'main-eight e-background-grey-800'}>
                 <Block className={'e-container e-padding-top-50 e-padding-bottom-50 flex-container'}>
                         <Text type={'h1'} classes={'e-text-center e-display-3 adjust-h1-header e-margin-bottom-40'}>
                             meet your new materiable theme
                         </Text>
                         <Btn label={'BUY THEME'} ripple={true} className={'raised e-background-pink-A200 e-margin-top-25 adjust-buy-button e-text-white'} />
                 </Block>
               </Block>

            </Block>
        );
    }
}

module.exports = MateriableHome;
