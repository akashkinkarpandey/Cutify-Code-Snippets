"use client"


export default function Header() {
    return (
      <header className="fixed top-0 w-full p-4 backdrop-blur-md bg-transparent z-50 ">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div
              className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-600"
              
            ></div>
            <span className="dark:text-white text-black font-semibold"
            
            >
              Cutify
            </span>
          </div>
          <div className="dark:text-gray-300 text-black text-sm flex items-center space-x-2">
            <span className="dark:text-white text-black hover:text-purple-400 transition-colors">
              From snippet to spotlight
            </span>
          </div>
        </nav>
      </header>
    );
}