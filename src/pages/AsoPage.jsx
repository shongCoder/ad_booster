import AsoComponent from "../components/AsoComponent.jsx";
import { Helmet } from 'react-helmet';

function AsoPage() {
    return (
        <>
            <Helmet>
                <title>ASO</title>
            </Helmet>
            <AsoComponent />
        </>
    );
}

export default AsoPage;