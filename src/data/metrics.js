export const chartData = {
  title: 'Document Type Access',
  colors: ['#1f5a84', '#4d80a6', '#6a99b8', '#8db3cc', '#bed5e5', '#f3b985'],
  items: [
    { value: 35, name: 'SOPs' },
    { value: 25, name: 'MoMs' },
    { value: 15, name: 'Manuals' },
    { value: 10, name: 'LMIs' },
    { value: 10, name: 'Feasibility' },
    { value: 5, name: 'Audits' },
  ],
};

export const metricStats = [
  {
    id: 'documents-viewed',
    label: 'Documents Viewed',
    value: '12,480',
    change: '+12.5%',
    changeNote: 'vs last months',
    themeColor: '#1849fd',
    sparklineColor: '#3b82f6',
    sparklineData: [10, 15, 12, 18, 14, 22, 20],
  },
  {
    id: 'downloads',
    label: 'Downloads',
    value: '8,734',
    change: '+8.2%',
    changeNote: 'vs last months',
    themeColor: '#16a34a',
    sparklineColor: '#10b981',
    sparklineData: [12, 10, 14, 13, 17, 15, 20],
  },
];
