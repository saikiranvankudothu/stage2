import React from 'react';

const teams = [
  { name: 'India', matches: 7, won: 6, lost: 1, points: 12, nrr: '+1.258' },
  { name: 'Australia', matches: 7, won: 5, lost: 2, points: 10, nrr: '+0.975' },
  { name: 'England', matches: 7, won: 4, lost: 3, points: 8, nrr: '+0.456' },
  { name: 'South Africa', matches: 7, won: 4, lost: 3, points: 8, nrr: '+0.234' },
];

export default function PointsTable() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Points Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-sm text-gray-500 dark:text-gray-400">
              <th className="text-left font-medium">Team</th>
              <th className="text-center font-medium">M</th>
              <th className="text-center font-medium">W</th>
              <th className="text-center font-medium">L</th>
              <th className="text-center font-medium">Pts</th>
              <th className="text-right font-medium">NRR</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {teams.map(team => (
              <tr key={team.name} className="text-sm">
                <td className="py-3 text-gray-900 dark:text-white font-medium">{team.name}</td>
                <td className="py-3 text-center text-gray-500 dark:text-gray-400">{team.matches}</td>
                <td className="py-3 text-center text-gray-500 dark:text-gray-400">{team.won}</td>
                <td className="py-3 text-center text-gray-500 dark:text-gray-400">{team.lost}</td>
                <td className="py-3 text-center text-gray-900 dark:text-white font-bold">{team.points}</td>
                <td className="py-3 text-right text-gray-500 dark:text-gray-400">{team.nrr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}