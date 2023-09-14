import React from 'react';
import {Box, Center, Flex, Heading, Image, Text, VStack} from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
import {ParticleAnimation} from "./ParticleAnimation";
import './ps.scss';
import {useRecoilState} from "recoil";
import {uiCardLPModelState, UICardLPModelState} from "../../atoms/uiCardLPModelState";
import {UICardModelForLP} from "../Model/LandingPage/UICardModel";

interface LPJapanProps {

}

export const LPJapan: React.FC<LPJapanProps> = ({}: LPJapanProps) => {
    const [uiCardLPModel, setUICardLPModelState] = useRecoilState<UICardLPModelState>(uiCardLPModelState);
 
    return (
        <>
            <Box position={'relative'}>
                {/* Full-width product image */}
                <Box
                    // bgImage="url('/img/landingpagenew.png')"
                    bgSize="cover"
                    bgPosition="center"
                    height="700px"
                >

                    <ParticleAnimation/>
                    {/* Overlay with animated text */}
                    <Flex
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        alignItems="center"
                        flexDirection="column"
                        textAlign="center"
                        width={'full'}
                        padding={'20'}
                    >
                        <Heading style={{fontSize: "100px"}} color="white" fontFamily="Raleway" fontWeight="bold">
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    cursor: '', // Remove the cursor
                                    delay: 150, // Adjust the typewriter speed (higher value means slower)
                                    wrapperClassName: 'type-effect'
                                }}
                                onInit={(typewriter) => {
                                    // Custom styles for individual letters
                                    typewriter
                                        .typeString("<span style='color: black'>Shall we</span>")
                                        .typeString("<span style='color: red'> talk?</span>")
                                        .start();
                                }}
                            />
                        </Heading>
                        <Heading style={{fontSize: "20px"}} color="white" fontFamily="Raleway" fontWeight="bold">
                            <Text fontWeight={'normal'} width={'full'}>
                                Shall We Talkは、現実世界のオフィスを バーチャルスペースへとDX化し、
                                オフィス内の「直接会話」をサポートすることで空間の活性化を目指すアプリケーションです。
                                会話に溢れ、他者を助け合う社会の創成をビジョンとしています。
                            </Text>
                        </Heading>
                    </Flex>
                </Box>
            </Box>
            <Box bg={'red.50'} width={'100%'} height={'750px'} maxHeight={'800px'}>
                <VStack padding={'20'} width={'full'} height={'full'} overflowY={'scroll'}>
                    <Flex gap={4}>
                        <Text fontSize={'80px'} fontFamily={'Raleway'} color={'red.400'}>What is</Text>
                        <Text fontSize={'80px'} fontFamily={'Raleway'} color={'red.400'} textDecoration={'underline'}>Shall
                            we talk?</Text>
                    </Flex>
                    <Text fontSize={'20px'} style={{textAlign: 'center'}} fontFamily={'Raleway'}>An app which allow you
                        to talk
                        to the people you don't know
                        in a closed physical space. This app is designed to prevent your hesitation while talking to the
                        people.
                        We have added a special talk status feature which allows you to set your status in the space so
                        other people
                        can make a decision to talk to you or not.
                    </Text>
                    <Flex gap={5} width={'full'} paddingTop={'10'}>
                        <Box width={'100%'} height={'320px'}>
                            <Image borderRadius={'10px'} width={'auto'} height={'320px'} objectFit={'cover'}
                                   src={'/img/NLP1.webp'}
                                   fallbackSrc={'https://via.placeholder.com/320'}/>
                        </Box>
                        <Box width={'100%'} height={'320px'}>
                            <Image borderRadius={'10px'} width={'auto'} height={'320px'} objectFit={'cover'}
                                   src={'/img/NLP2.webp'}
                                   fallbackSrc={'https://via.placeholder.com/320'}/>
                        </Box>
                        <Box width={'100%'} height={'320px'}>
                            <Image borderRadius={'10px'} width={'auto'} height={'320px'}
                                   textAlign={'center'} src={'/img/NLP3.webp'}
                                   fallbackSrc={'https://via.placeholder.com/320'}/>
                        </Box>
                    </Flex>
                </VStack>
            </Box>
            <Box bg={'red.300'} width={'100%'} height={'800px'} maxHeight={'810px'}>
                <VStack padding={'20'} width={'full'} height={'full'} overflowY={'scroll'}>
                    <Flex gap={4}>
                        <Text fontSize={'80px'} color={'white'}>How to use</Text>
                        <Text fontSize={'80px'} fontFamily={'Raleway'} color={'white'} textDecoration={'underline'}>Shall
                            we talk?</Text>
                    </Flex>
                    <Text fontSize={'20px'} color={'white'} style={{textAlign: 'center'}} fontFamily={'Raleway'}>
                        As a end user It is very easy to use SWT app. You just need to get the space id from space owner
                        and
                        you need to register and login using your email, password and space-id. As soon as you register
                        for the app
                        you will be redirected to the create profile page and there you need to create the profile and
                        from there you
                        will get redirected to the dashboard where you will see other users having them logged-in in the
                        space.
                        Below are the features you can perform after logging-in in the app.
                    </Text>
                    <Flex gap={5} width={'full'} paddingTop={'5'} justifyContent={'center'} alignItems={'center'}>
                        <UICardModelForLP title={'Login and Signup Process'}/>
                        <Center _hover={{bg: 'red.400'}} cursor={'pointer'} border={'1px solid'} padding={'5'}
                                borderColor={'white'}
                                borderRadius={'10px'} width={'100%'}
                                height={'320px'}
                                onClick={() => setUICardLPModelState({open: true})}
                        >
                            <Text fontSize={'34px'} color={'white'} textAlign={'center'}>Login and Register with
                                Space-Key</Text>
                        </Center>
                        <Center _hover={{bg: 'red.400'}} border={'1px solid'} padding={'5'} borderColor={'white'}
                                borderRadius={'10px'}
                                width={'100%'}
                                height={'320px'}>
                            <Text fontSize={'34px'} color={'white'} textAlign={'center'}>Create your genuine
                                profile</Text>
                        </Center>
                        <Center _hover={{bg: 'red.400'}} border={'1px solid'} padding={'5'} borderColor={'white'}
                                borderRadius={'10px'}
                                width={'100%'}
                                height={'320px'}>
                            <Text fontSize={'34px'} color={'white'} textAlign={'center'}>Start talking in your
                                space</Text>
                        </Center>
                    </Flex>
                </VStack>
            </Box>
        </>
    )
}
