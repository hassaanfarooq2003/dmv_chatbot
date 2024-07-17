import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ChatInterface = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="flex h-screen antialiased text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900">
      <div className="flex flex-col md:flex-row h-full w-full overflow-x-hidden">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block md:flex md:flex-col py-8 pl-6 pr-2 w-full md:w-64 bg-white dark:bg-gray-800 flex-shrink-0 transition-all duration-300`}>
          <div className="flex flex-row items-center justify-between h-12 w-full">
            <div className="flex items-center justify-center rounded-2xl text-indigo-700 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900 h-10 w-10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
            </div>
            <div className="ml-2 font-bold text-2xl">ChatBot</div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          {/* User profile */}
          <div className="flex flex-col items-center bg-indigo-100 dark:bg-indigo-900 border border-gray-200 dark:border-gray-700 mt-4 w-full py-6 px-4 rounded-lg">
            <div className="h-20 w-20 rounded-full border overflow-hidden">
              <img src="https://avatars3.githubusercontent.com/u/2763884?s=128" alt="Avatar" className="h-full w-full" />
            </div>
            <div className="text-sm font-semibold mt-2">User</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Chatbot User</div>
            <div className="flex flex-row items-center mt-3">
              <div className="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full">
                <div className="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
              </div>
              <div className="leading-none ml-1 text-xs">Active</div>
            </div>
          </div>
          {/* Chat history */}
          <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center justify-between text-xs">
              <span className="font-bold">Chat History</span>
              <span className="flex items-center justify-center bg-gray-300 dark:bg-gray-600 h-4 w-4 rounded-full">4</span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
              <button className="flex flex-row items-center hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl p-2">
                <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 dark:bg-indigo-700 rounded-full">1</div>
                <div className="ml-2 text-sm font-semibold">Previous Chat 1</div>
              </button>
              {/* Add more chat history buttons here */}
            </div>
          </div>
        </div>

        {/* Main chat area */}
        <div className="flex flex-col flex-auto h-full p-6">
          {/* Mobile menu button */}
          <button 
            className="md:hidden mb-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? 'Close Menu' : 'Open Menu'}
          </button>

          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 dark:bg-gray-800 h-full p-4">
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2">
                  <div className="col-start-1 col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        B
                      </div>
                      <div className="relative ml-3 text-sm bg-white dark:bg-gray-700 py-2 px-4 shadow rounded-xl">
                        <div>Hello! How can I assist you today?</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-start-6 col-end-13 p-3 rounded-lg">
                    <div className="flex items-center justify-start flex-row-reverse">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        U
                      </div>
                      <div className="relative mr-3 text-sm bg-indigo-100 dark:bg-indigo-900 py-2 px-4 shadow rounded-xl">
                        <div>Hi! I have a question about your services.</div>
                      </div>
                    </div>
                  </div>
                  {/* Add more message components here */}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center h-16 rounded-xl bg-white dark:bg-gray-700 w-full px-4">
              <div>
                <button className="flex items-center justify-center text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                  </svg>
                </button>
              </div>
              <div className="flex-grow ml-4">
                <div className="relative w-full">
                  <input 
                    type="text"
                    className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10 bg-transparent"
                    placeholder="Type your message..."
                  />
                </div>
              </div>
              <div className="ml-4">
                <button className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
                  <span>Send</span>
                  <span className="ml-2">
                    <svg className="w-4 h-4 transform rotate-45 -mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;