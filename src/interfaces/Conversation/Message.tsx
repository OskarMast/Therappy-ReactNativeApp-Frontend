import MessageType from './MessageType';
import MessageUser from './MessageUser';
interface BaseMessage {
  uuid: string;
  type: MessageType;
  createdAt: string;
  from: MessageUser;
  readTimestamp: string;
}

interface AssignmentMessage extends BaseMessage {
  type: MessageType.ASSIGNMENT;
  payload: {
    clientId: number;
    therapistId: number;
  };
}

interface TextMessage extends BaseMessage {
  type: MessageType.TEXT;
  payload: {
    message: string;
  };
}

type Message = AssignmentMessage | TextMessage;

interface SocketFields {
  conversationUUID: string;
}

type SocketAssignmentMessage = AssignmentMessage & SocketFields;
type SocketTextMessage = TextMessage & SocketFields;

export type SocketMessage = SocketAssignmentMessage | SocketTextMessage;

export default Message;
