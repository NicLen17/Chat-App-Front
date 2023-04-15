import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {

    return (

        <div style={{ height: "100vh" }}>
            <PrettyChatWindow
                projectId='bdd6a43e-0c95-4b22-abaf-75726ac3c262'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: "100%" }}
            />
        </div>

    )
}

export default ChatsPage;