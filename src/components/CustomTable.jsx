import { useTheme } from '../context/ThemeContext'

const CustomTable = ({ headers, data, actions }) => {
  const { theme } = useTheme()

  return (
    <div className="overflow-x-auto rounded-lg border border-opacity-50">
      <table className={`w-full ${theme.text}`}>
        <thead>
          <tr className={`${theme.card} border-b ${theme.border}`}>
            {headers.map((header, index) => (
              <th
                key={index}
                className={`px-6 py-4 text-left text-sm font-semibold ${theme.textSecondary}`}
              >
                {header}
              </th>
            ))}
            {actions && (
              <th className={`px-6 py-4 text-center text-sm font-semibold ${theme.textSecondary}`}>
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className={`divide-y ${theme.border}`}>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${theme.card} ${theme.cardHover} transition-colors duration-200`}
            >
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex} className="px-6 py-4 text-sm">
                  {typeof cell === 'object' ? (
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium
                        ${cell.status === 'Approved'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'}`}
                    >
                      {cell.text}
                    </span>
                  ) : (
                    cell
                  )}
                </td>
              ))}
              {actions && (
                <td className="px-6 py-4 text-center">
                  {actions(row)}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CustomTable