import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import DarkMode from "./DarkMode";
import NavLink from "./Link";
import Logo from "./Logo";
import Profile from "./Profile";


const NavBar = () =>{

    const [active,setActive] = useState(false);
    const handlerActive = () => setActive(!active);

    return(
        <>
            <Flex
            w={'100%'}
            h={'70px'}
            boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
            justify={'space-between'}
            alignItems={'center'}
            p={"2rem 1rem"}
            >
                <Logo/>
                <NavLink active={active}/>
                <Flex
                alignItems={'center'}
                >
                <DarkMode/>
                <Flex
                         w={'40px'}
                         h={'40px'}
                         borderRadius={'50%'}
                         mr={'.8rem'}
                         display={{base:'flex',md:'none'}}
                         boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
                         justify={'center'}
                         alignItems={'center'}
                         cursor={'pointer'}
                         onClick={handlerActive}
                    >
                        X
                    </Flex>
                <Box
                display={{base:'none',md:'block'}}
                >
                    <Profile/>
                </Box>
                </Flex>
            </Flex>
        </>
    )
}

export default NavBar;


