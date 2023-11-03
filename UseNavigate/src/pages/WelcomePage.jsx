import { useParams } from 'react-router-dom';

function WelcomePage() {
    let { userInfo } = useParams();

    console.log(userInfo);
    return (
        <>
            <h2>Welcome to your Page {userInfo}!!!</h2>
        </>
    );
}

export default WelcomePage;
