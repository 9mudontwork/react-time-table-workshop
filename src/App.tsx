// import './App.css'
import { TimeTable } from './components/time-table/TimeTable'

function App() {
  console.count('app => render')
  return (
    <>
      <div className="flex flex-col min-h-screen gap-y-4">
        <TimeTable />
      </div>
    </>
  )
}

export default App
