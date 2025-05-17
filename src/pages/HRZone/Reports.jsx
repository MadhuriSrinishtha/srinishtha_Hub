import { useTheme } from '../../context/ThemeContext'
import { useState } from 'react'
import { Bar, Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
} from 'chart.js'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
)

const Reports = () => {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedYear, setSelectedYear] = useState('2025')
  const [selectedDepartment, setSelectedDepartment] = useState('Engineering')

  const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance']

  // Overview Data
  const statusData = {
    labels: ['Approved', 'Rejected', 'Pending'],
    datasets: [{
      data: [78, 12, 10],
      backgroundColor: [
        'rgb(34, 197, 94)',
        'rgb(239, 68, 68)',
        'rgb(234, 179, 8)'
      ]
    }]
  }

  const typeData = {
    labels: ['Annual', 'Sick', 'Personal', 'Bereavement', 'Parental', 'Unpaid'],
    datasets: [{
      data: [52, 20, 12, 4, 10, 2],
      backgroundColor: [
        'rgb(59, 130, 246)',
        'rgb(239, 68, 68)',
        'rgb(147, 51, 234)',
        'rgb(75, 85, 99)',
        'rgb(34, 197, 94)',
        'rgb(234, 179, 8)'
      ]
    }]
  }

  // Monthly Distribution Data
  const monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Annual',
        data: [4, 5, 3, 2, 6, 8, 12, 10, 6, 4, 3, 2],
        backgroundColor: 'rgb(59, 130, 246)'
      },
      {
        label: 'Sick',
        data: [2, 3, 4, 3, 2, 1, 2, 3, 3, 2, 1, 1],
        backgroundColor: 'rgb(239, 68, 68)'
      },
      {
        label: 'Personal',
        data: [1, 1, 2, 0, 2, 3, 1, 1, 0, 2, 1, 1],
        backgroundColor: 'rgb(147, 51, 234)'
      }
    ]
  }

  const departmentData = {
    Engineering: {
      totalLeaves: 45,
      totalDays: 195,
      averageLength: '4.5 days',
      distribution: {
        labels: ['Annual', 'Sick', 'Personal', 'Other'],
        datasets: [{
          data: [67, 18, 9, 7],
          backgroundColor: [
            'rgb(59, 130, 246)',
            'rgb(239, 68, 68)',
            'rgb(147, 51, 234)',
            'rgb(75, 85, 99)'
          ]
        }]
      }
    },
    Marketing: {
      totalLeaves: 38,
      totalDays: 152,
      averageLength: '4.0 days',
      distribution: {
        labels: ['Annual', 'Sick', 'Personal', 'Other'],
        datasets: [{
          data: [58, 22, 12, 8],
          backgroundColor: [
            'rgb(59, 130, 246)',
            'rgb(239, 68, 68)',
            'rgb(147, 51, 234)',
            'rgb(75, 85, 99)'
          ]
        }]
      }
    },
    Sales: {
      totalLeaves: 42,
      totalDays: 168,
      averageLength: '4.0 days',
      distribution: {
        labels: ['Annual', 'Sick', 'Personal', 'Other'],
        datasets: [{
          data: [62, 20, 10, 8],
          backgroundColor: [
            'rgb(59, 130, 246)',
            'rgb(239, 68, 68)',
            'rgb(147, 51, 234)',
            'rgb(75, 85, 99)'
          ]
        }]
      }
    },
    HR: {
      totalLeaves: 32,
      totalDays: 128,
      averageLength: '4.0 days',
      distribution: {
        labels: ['Annual', 'Sick', 'Personal', 'Other'],
        datasets: [{
          data: [65, 15, 12, 8],
          backgroundColor: [
            'rgb(59, 130, 246)',
            'rgb(239, 68, 68)',
            'rgb(147, 51, 234)',
            'rgb(75, 85, 99)'
          ]
        }]
      }
    },
    Finance: {
      totalLeaves: 35,
      totalDays: 140,
      averageLength: '4.0 days',
      distribution: {
        labels: ['Annual', 'Sick', 'Personal', 'Other'],
        datasets: [{
          data: [70, 15, 10, 5],
          backgroundColor: [
            'rgb(59, 130, 246)',
            'rgb(239, 68, 68)',
            'rgb(147, 51, 234)',
            'rgb(75, 85, 99)'
          ]
        }]
      }
    }
  }

  const customReportTypes = [
    { id: 'leave-balance', name: 'Leave Balance Report', description: 'View remaining leave balances for all employees' },
    { id: 'attendance', name: 'Attendance Analysis', description: 'Detailed attendance patterns and trends' },
    { id: 'cost', name: 'Leave Cost Analysis', description: 'Financial impact of leave usage' },
    { id: 'compliance', name: 'Compliance Report', description: 'Leave policy compliance status' }
  ]

  const chartOptions = {
    plugins: {
      legend: {
        position: 'bottom'
      }
    },
    responsive: true
  }

  const monthlyChartOptions = {
    plugins: {
      legend: {
        position: 'bottom'
      },
      tooltip: {
        mode: 'index'
      }
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false
        }
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 20,
        ticks: {
          stepSize: 5
        }
      }
    }
  }

  return (
    <div className={`p-6 ${theme.background}`}>
      <div className={`${theme.card} rounded-xl shadow-lg border ${theme.border}`}>
        <div className="p-6">
          <h2 className={`text-2xl font-bold ${theme.heading} mb-6`}>Leave Reports</h2>
          
          {/* Tabs */}
          <div className="flex space-x-4 mb-6 border-b">
            {['Overview', 'Monthly Distribution', 'Department Analysis', 'Custom Reports'].map((tab) => (
              <button
                key={tab}
                className={`pb-2 px-4 ${activeTab === tab.toLowerCase().replace(' ', '-') 
                  ? `border-b-2 border-purple-500 ${theme.heading}` 
                  : theme.textSecondary}`}
                onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Overview Content */}
          {activeTab === 'overview' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className={`p-4 rounded-xl border ${theme.border}`}>
                  <h3 className={`text-lg font-semibold ${theme.heading} mb-4`}>Leave Status Distribution</h3>
                  <div className="h-64">
                    <Pie data={statusData} options={chartOptions} />
                  </div>
                </div>
                <div className={`p-4 rounded-xl border ${theme.border}`}>
                  <h3 className={`text-lg font-semibold ${theme.heading} mb-4`}>Leave Type Distribution</h3>
                  <div className="h-64">
                    <Pie data={typeData} options={chartOptions} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Monthly Distribution Content */}
          {activeTab === 'monthly-distribution' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className={`text-xl font-semibold ${theme.heading}`}>
                  Monthly Leave Distribution ({selectedYear})
                </h3>
                <div className="flex space-x-2">
                  {['2024', '2025', '2026'].map((year) => (
                    <button
                      key={year}
                      className={`px-4 py-1 rounded ${selectedYear === year 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'bg-gray-50 text-gray-600'}`}
                      onClick={() => setSelectedYear(year)}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8 h-96">
                <Bar data={monthlyData} options={monthlyChartOptions} />
              </div>
            </div>
          )}

          {/* Department Analysis Content */}
          {activeTab === 'department-analysis' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className={`text-xl font-semibold ${theme.heading}`}>{selectedDepartment}</h3>
                <div className="flex space-x-2">
                  {departments.map((dept) => (
                    <button
                      key={dept}
                      className={`px-4 py-1 rounded ${selectedDepartment === dept 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'bg-gray-50 text-gray-600'}`}
                      onClick={() => setSelectedDepartment(dept)}
                    >
                      {dept}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className={`p-4 rounded-lg ${theme.card} border ${theme.border}`}>
                  <div className={`text-sm ${theme.textSecondary}`}>Total Leaves</div>
                  <div className={`text-3xl font-bold ${theme.heading}`}>{departmentData[selectedDepartment].totalLeaves}</div>
                </div>
                <div className={`p-4 rounded-lg ${theme.card} border ${theme.border}`}>
                  <div className={`text-sm ${theme.textSecondary}`}>Total Days</div>
                  <div className={`text-3xl font-bold ${theme.heading}`}>{departmentData[selectedDepartment].totalDays}</div>
                </div>
                <div className={`p-4 rounded-lg ${theme.card} border ${theme.border}`}>
                  <div className={`text-sm ${theme.textSecondary}`}>Average Length</div>
                  <div className={`text-3xl font-bold ${theme.heading}`}>{departmentData[selectedDepartment].averageLength}</div>
                </div>
              </div>

              <div className="h-80">
                <Pie data={departmentData[selectedDepartment].distribution} options={chartOptions} />
              </div>
            </div>
          )}

          {/* Custom Reports Content */}
          {activeTab === 'custom-reports' && (
            <div className="grid grid-cols-2 gap-6">
              {customReportTypes.map((report) => (
                <div
                  key={report.id}
                  className={`p-6 rounded-xl ${theme.card} border ${theme.border} hover:shadow-lg transition-all duration-200`}
                >
                  <h3 className={`text-xl font-semibold ${theme.heading} mb-2`}>{report.name}</h3>
                  <p className={`${theme.text} mb-4`}>{report.description}</p>
                  <div className="flex space-x-3">
                    <button
                      className={`px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-200`}
                    >
                      Generate Report
                    </button>
                    <button
                      className={`px-4 py-2 rounded-lg border ${theme.border} ${theme.text} hover:bg-gray-50 transition-colors duration-200`}
                    >
                      Schedule
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Reports