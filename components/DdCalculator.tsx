const DdCalculator = () => {

  const calculateRecovery = (drawdown: number) => {
    if (drawdown === 0) return 0;
    return ((1 / (1 - drawdown / 100)) - 1) * 100;
  };

  const data = [];
  for (let i = 5; i <= 95; i = i + 5) {
    data.push({
      drawdown: i,
      recovery: calculateRecovery(i),
    });
  }

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Drawdown (%)
            </th>
            <th scope="col" className="py-3 px-6">
              Recovery required (%)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="py-4 px-6">-{item.drawdown.toFixed(2)}%</td>
              <td className="py-4 px-6">{item.recovery.toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DdCalculator;
