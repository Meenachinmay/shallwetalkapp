import React from 'react'
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text
} from '@chakra-ui/react'
import {useRecoilState} from "recoil";
import {UICardLPModelState, uiCardLPModelState} from "../../../atoms/uiCardLPModelState";

interface UICardModelProps {
    title: string,
}

export const UICardModelForLP: React.FC<UICardModelProps> = ({title}: UICardModelProps) => {
    const [modelState, setModelState] = useRecoilState<UICardLPModelState>(uiCardLPModelState);

    const handleClose = () => {
        setModelState((prev) => ({
            ...prev,
            open: false,
        }));
    };

    return (
        <>
            <Modal size={'xl'} isOpen={modelState.open} onClose={handleClose}>
                <ModalOverlay/>
                <ModalContent height={'500px'}>
                    <ModalHeader textAlign={'center'} color={'red.300'} fontSize={'30px'}>{title}</ModalHeader>
                    <ModalCloseButton/>

                    <ModalBody padding={'10'} bg={'red.300'} fontWeight={'bold'} color={'white'}>
                        <Text>You can register as a new user with your email, password and space-key.
                        Space-key is something like an access code what you get from your space owner.</Text>
                        <br></br> 
                        <Text>After registering yourself once then depending on your space-key you can login to different spaces.</Text> 
                        <br></br> 
                        <Text>You might have more than one space keys but only single sign-in email and password.</Text>   
                   </ModalBody>

                    <ModalFooter>
                        <Button bg={'white'} color={'red.300'} 
                        _hover={{ color: 'white', 
                        bg: 'red.300', borderColor: 'white'}} mr={3} onClick={handleClose}>
                            Close
                        </Button>
                    </ModalFooter>

                </ModalContent>
            </Modal>
        </>
    )
}
