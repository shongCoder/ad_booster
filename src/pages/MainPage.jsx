import MainComponent from "../components/MainComponent.jsx";
import {Helmet} from "react-helmet";

function MainPage() {
    return (
        <>
            <Helmet>
                <title>AdBooster</title>
            </Helmet>
            <MainComponent />
        </>
    );
}

export default MainPage;