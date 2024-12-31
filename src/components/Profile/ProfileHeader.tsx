import React from 'react';
import { Settings, MapPin, Link as LinkIcon } from 'lucide-react';

interface ProfileHeaderProps {
  user: {
    name: string;
    username: string;
    bio: string;
    location: string;
    website: string;
    isFollowing: boolean;
    stats: {
      matches: number;
      followers: number;
      following: number;
      posts: number;
    };
  };
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="relative w-32 h-32 rounded-full border-4 border-gray-200 dark:border-gray-700 overflow-hidden flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80"
            alt={user.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{user.name}</h1>
            <div className="flex gap-3">
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                {user.isFollowing ? 'Following' : 'Follow'}
              </button>
              <button className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <Settings className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>

          <div className="flex gap-6 mb-4">
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900 dark:text-white">{user.stats.matches}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Matches</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900 dark:text-white">{user.stats.followers}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900 dark:text-white">{user.stats.following}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Following</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900 dark:text-white">{user.stats.posts}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Posts</div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-gray-600 dark:text-gray-400">{user.bio}</p>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>{user.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <LinkIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <a href={user.website} className="text-indigo-600 hover:text-indigo-500">{user.website}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}