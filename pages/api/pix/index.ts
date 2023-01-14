import Gerencianet from "gn-api-sdk-typescript";
import { NextApiRequest, NextApiResponse } from "next";
import options from '../../../utils/gerenciaNet/credenciais';

const handlerPix = (
    req:NextApiRequest,
    res: NextApiResponse
) =>{
    
        const gerencianet = new Gerencianet(options);

        gerencianet.gnCreateEvp().then((result : any) => {
            res.status(200).json(result)
        });

}

export default handlerPix;