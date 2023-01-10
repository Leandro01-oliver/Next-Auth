import { Box, Button, Flex, useColorMode, Link } from "@chakra-ui/react";
import Profile from "../Profile";

type data ={
active : boolean
}

const NavLink = ({active}:data) => {

   const { colorMode } = useColorMode();

 
   return (
      <>
         <Flex
         alignItems={'center'}
         justifyContent={'center'}
         display={{base:'none',md:'flex'}}
         >
            <Link href={'/'}  w={{base:'100%',md:'auto'}} textDecoration={'none!important'} >
               <Button
                 w={{base:'100%',md:'auto'}}
               >
                  Home
               </Button>
            </Link>
            <Link href={'/about'}   w={{base:'100%',md:'auto'}} textDecoration={'none!important'}>
               <Button
                  mx={{base:'0',md:'1rem'}}
                  my={{base:'1rem',md:'0'}}
                  w={{base:'100%',md:'auto'}}
               >
                  About
               </Button>
            </Link>
            <Link href={'/service'}   w={{base:'100%',md:'auto'}} textDecoration={'none!important'}>
               <Button
                 w={{base:'100%',md:'auto'}}
               >
                  Service
               </Button>
            </Link>
         </Flex>
         <Flex
              display={active ? {base:'flex',md:'none'} : 'none'}
              flexDirection={'column'}
              position={'absolute'}
              top={'70px'}
              left={'0'}
              width={'100%'}
              p={'1rem'}
              bg={colorMode.includes("dark")  ? {base:'#000',md:'#1a202c'} : {base:'#ccc',md:'transparent'}}
              borderRadius={'0 0 10px 10px '}
         >
            <Profile/>
            <Link href={'/'}  w={{base:'100%',md:'auto'}} textDecoration={'none!important'} mt={'1rem'}>
               <Button
                 w={{base:'100%',md:'auto'}}
               >
                  Home
               </Button>
            </Link>
            <Link href={'/about'}   w={{base:'100%',md:'auto'}} textDecoration={'none!important'}>
               <Button
                  mx={{base:'0',md:'1rem'}}
                  my={{base:'1rem',md:'0'}}
                  w={{base:'100%',md:'auto'}}
               >
                  About
               </Button>
            </Link>
            <Link href={'/service'}   w={{base:'100%',md:'auto'}} textDecoration={'none!important'}>
               <Button
                 w={{base:'100%',md:'auto'}}
               >
                  Service
               </Button>
            </Link>
         </Flex>
      </>
   )
}

export default NavLink;


