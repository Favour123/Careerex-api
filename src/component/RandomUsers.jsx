import React from "react";
import { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";
import UserCard from "./UserCard";

const RandomUsers = () => {
   const [users, setUsers] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   // Function to fetch random users
   const fetchUsers = async (count = 6) => {
      setLoading(true);
      setError(null);

      try {
         const response = await fetch(`https://randomuser.me/api/?results=${count}`);

         if (!response.ok) {
            throw new Error("Failed to fetch users");
         }

         const data = await response.json();
         setUsers(data.results);
      } catch (err) {
         setError(err.message);
      } finally {
         setLoading(false);
      }
   };

   // Fetch users on component mount
   useEffect(() => {
      fetchUsers();
   }, []);

   return (
      <div className="container mx-auto px-4 py-8">
         <div className="text-center mb-8">
            <button
               onClick={() => fetchUsers()}
               disabled={loading}
               className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
            >
               <RefreshCw className={`w-5 h-5 ${loading ? "animate-spin" : ""}`} />
               <span>{loading ? "Loading..." : "Get New Users"}</span>
            </button>
         </div>

         {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 text-center">
               <strong>Error:</strong> {error}
            </div>
         )}

         {loading && (
            <div className="flex justify-center items-center py-12">
               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
         )}

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user, index) => (
               <UserCard key={`${user.login.uuid}-${index}`} user={user} />
            ))}
         </div>

         {users.length > 0 && !loading && (
            <div className="text-center mt-8 text-gray-600">
               <p>Showing {users.length} random users</p>
            </div>
         )}
      </div>
   );
};
export default RandomUsers;
