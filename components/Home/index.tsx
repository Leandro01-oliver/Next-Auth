import { Flex } from "@chakra-ui/react"
import Content from "./Content"
import Footer from "../Footer"
import NavBar from "../NavBar"

const HomeComponent = () => {
    return (
        <>
                <NavBar />
                <Content />
                <Footer />
        </>
    )
}

export default HomeComponent