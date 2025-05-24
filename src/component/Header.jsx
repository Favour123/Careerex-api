import React from "react";
import { Users } from "lucide-react";
const Header = () => {
        return (
          <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
            <div className="container mx-auto px-4 py-6">
              <div className="flex items-center justify-center space-x-3">
                <Users className="w-8 h-8" />
                <h1 className="text-3xl font-bold">Random User Generator</h1>
              </div>
            </div>
          </header>
    );
};

export default Header;