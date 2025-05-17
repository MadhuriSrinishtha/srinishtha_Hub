import { useTheme } from '../../context/ThemeContext'
import CustomTable from '../../components/CustomTable'

const Approvals = () => {
  const { theme } = useTheme()

  const headers = ['Employee', 'Leave Type', 'Duration', 'Status'] // Removed 'Actions' from headers
  const approvalData = [
    {
      employee: 'John Doe',
      type: 'Annual Leave',
      duration: '3 days',
      status: { text: 'Pending', status: 'Pending' }
    }
  ]

  const renderActions = (row) => (
    <div className="flex space-x-2">
      <button className={`px-4 py-2 rounded-lg ${theme.primary} ${theme.buttonText} ${theme.primaryHover} transform hover:scale-105 transition-all duration-200`}>
        Approve
      </button>
      <button className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transform hover:scale-105 transition-all duration-200">
        Reject
      </button>
    </div>
  )

  return (
    <div className={`p-6 ${theme.background}`}>
      <div className={`${theme.card} rounded-xl shadow-lg border ${theme.border}`}>
        <div className="p-6">
          <h2 className={`text-2xl font-bold ${theme.heading} mb-6`}>Leave Approvals</h2>
          <CustomTable
            headers={headers}
            data={approvalData}
            actions={renderActions}
          />
        </div>
      </div>
    </div>
  )
}

export default Approvals