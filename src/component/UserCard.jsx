import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const UserCard = ({ user }) => {
        return (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-24"></div>
            <div className="relative px-6 pb-6">
              <div className="flex justify-center -mt-12 mb-4">
                <img
                  src={user.picture.large}
                  alt={`${user.name.first} ${user.name.last}`}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {user.name.title} {user.name.first} {user.name.last}
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4 text-blue-500" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4 text-green-500" />
                    <span>{user.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>{user.location.city}, {user.location.country}</span>
                  </div>
                </div>
                <div className="mt-4 text-xs text-gray-500">
                  Age: {user.dob.age} | Gender: {user.gender}
                </div>
              </div>
            </div>
          </div>
        );
      };
export default UserCard;