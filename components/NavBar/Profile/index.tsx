import { Avatar } from "@chakra-ui/react";
import { signOut, useSession, signIn } from "next-auth/react";


const Profile = ()=>{

  const { data: session } = useSession()

    return(
        <>
        {
            <Avatar
                w={{base:'80px',md:'45px'}}
                h={{base:'80px',md:'45px'}}
                m={'0 auto'}
                cursor={'pointer'}
                src={!session ? '' : `${session.user?.image}`}
                boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
                onClick={()=>{ 
                    !session ? signIn() : signOut() 
                }}
            />
        }

        </>
    )
}

export default Profile;