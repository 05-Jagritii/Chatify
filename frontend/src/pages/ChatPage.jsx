import React from 'react'
import { useChatStore } from '../store/useChatStore';
import ProfileHeader from '../components/ProfileHeader';
import ActiveTabSwitch from '../components/ActiveTabSwitch';
import ChatContainer from '../components/ChatContainer';
import NoConversationPlaceholder from './NoConversationPlaceholder';
import BorderAnimatedContainer from '../components/BorderAnimatedContainer';
import ChatList from '../components/ChatList';
import ContactList from '../components/ContactList';

function ChatPage() {
  const { activeTab, selectedUser } = useChatStore();

  return (
    <div className="h-screen w-screen bg-slate-900 overflow-hidden p-8">
      <div className="w-full h-full max-w-7xl mx-auto">
        <BorderAnimatedContainer>
          
          <div className="flex w-full h-[750px]">
            
            {/* LEFT SIDEBAR */}
            <div className="w-80 bg-slate-800/50 backdrop-blur-sm flex flex-col border-r border-slate-700">
              <ProfileHeader />
              <ActiveTabSwitch />

              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {activeTab === "chats" ? <ChatList /> : <ContactList />}
              </div>
            </div>

            {/* RIGHT CHAT AREA */}
            <div className="flex-1 flex flex-col bg-slate-900/50 backdrop-blur-sm">
              {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
            </div>

          </div>

        </BorderAnimatedContainer>
      </div>
    </div>
  );
}

export default ChatPage;