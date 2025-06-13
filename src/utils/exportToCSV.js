import { toast } from 'react-toastify';

export function exportToCSV(transactions, fileName = 'transactions.csv') {
  if (!transactions || transactions.length === 0) {
    toast.error('No transactions to export');
    return;
  }

  const header = [
    'Date',
    'Time',
    'Description',
    'Amount',
    'Currency',
    'Status',
  ];
  const rows = transactions.map((item) => [
    item.date,
    item.time,
    item.description,
    item.amount,
    item.currency,
    item.status,
  ]);

  const csvContent = [header, ...rows]
    .map((row) =>
      row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')
    )
    .join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
