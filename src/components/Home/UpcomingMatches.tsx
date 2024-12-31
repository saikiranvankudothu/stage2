import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const matches = [
  {
    id: 1,
    team1: 'New Zealand',
    team2: 'Pakistan',
    date: '2024-03-25',
    time: '14:30',
    venue: 'Eden Gardens, Kolkata',
  },
  {
    id: 2,
    team1: 'Sri Lanka',
    team2: 'Bangladesh',
    date: '2024-03-27',
    time: '19:00',
    venue: 'R.Premadasa Stadium, Colombo',
  },
];

export default function UpcomingMatches() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Upcoming Matches</h2>
      <div className="space-y-4">
        {matches.map(match => (
          <div
            key={match.id}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {match.team1} vs {match.team2}
              </h3>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {match.date}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {match.time}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{match.venue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}