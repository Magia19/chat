import {PrettyChatWindow} from "react-chat-engine-pretty"

const ChatsPage = (props) => {
    return <div className="background">
      <PrettyChatWindow
      projectId="06d646b4-c79d-43dc-8c7b-3f5e5b6915e6"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: '100vh' }}
    />
    </div>;
  };
  export default ChatsPage;