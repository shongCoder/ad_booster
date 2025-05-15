import FaqComponent from "../components/FaqComponent.jsx";
import {Helmet} from "react-helmet";

function FaqPage() {
    return (
        <>
            <Helmet>
                <title>자주 묻는 질문</title>
            </Helmet>
            <FaqComponent />
        </>
    );
}

export default FaqPage;