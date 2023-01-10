import { Box } from "@chakra-ui/react";
import Image from "next/image";


const Logo = () =>{
    return(
        <>

        <Image
                alt="logo"
                height={50}
                width={50}
                src="/logo.png"
                style={{
                    borderRadius:'50%',
                    cursor:'pointer'
                }}
            />
        </>
           
    )
}

export default Logo;