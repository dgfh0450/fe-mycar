import Header from "../components/header/header";
import Nav from "../components/main/nav";
import Title from "../components/main/title";
import RootContainer from "../container/container";

const Main = () => {
    return (
        <RootContainer>
            <Header/>
            <Title/>
            <Nav/>
            <div></div>
        </RootContainer>
    )
}

export default Main;