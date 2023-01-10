import { Flex, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { MdOutlineDarkMode } from 'react-icons/md'
import { WiSolarEclipse } from 'react-icons/wi';

const DarkMode = () =>{

    const { toggleColorMode } = useColorMode();
    const [click,setClick] = useState(false);

    const handlerClick = ()=> setClick(!click);

    return(
        <>
        <Flex
        w={'40px'}
        h={'40px'}
        borderRadius={'50%'}
        mr={'.8rem'}
        boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
        justify={'center'}
        alignItems={'center'}
        cursor={'pointer'}
        onClick={()=>{toggleColorMode();handlerClick()}}
        >
          {
            click ?
            <MdOutlineDarkMode/>
            :
            <WiSolarEclipse/>
          }
        </Flex>
        </>
    )
}

export default DarkMode;