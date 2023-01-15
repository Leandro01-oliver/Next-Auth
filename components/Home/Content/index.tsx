import { Box, Button } from "@chakra-ui/react";
import { generetKey } from "../../../utils/gerenciaNet/key";


const Content = () =>{

    return(
        <>
          <Box
          w={'100%'}
          minH={'calc(100vh - 70px)'}
          p={'2rem'}
          >
             Conteúdo da página

             <Button
             onClick={()=>{
              generetKey()
             }}
             >
               Gerar Chave
             </Button>
          </Box>
        </>
    )
}

export default Content;