import React from 'react';

const performers = [
  {
    id: 1,
    name: 'Virat Kohli',
    stat: '385 runs',
    category: 'Most Runs',
    team: 'India',
  },
  {
    id: 2,
    name: 'Mitchell Starc',
    stat: '15 wickets',
    category: 'Most Wickets',
    team: 'Australia',
  },
];

export default function TopPerformers() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Top Performers</h2>
      <div className="space-y-4">
        {performers.map(performer => (
          <div
            key={performer.id}
            className="flex items-center space-x-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50"
          >
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {performer.category}
              </p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {performer.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {performer.team}
              </p>
            </div>
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              {performer.stat}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}