import { DisplayTime } from './DispalyTime'

export const TimeTable = () => {
  const dateTimes = [
    '25-01-2023, 145:49:41',
    '25-01-2023, 14:49:41',
    '25-01-2023, 14:49:41',
    '25-01-2023, 14:49:41',
    '25-01-2023, 14:49:41',
    '25-01-2023, 14:50:00',
  ]

  return (
    <>
      <table className="border-collapse border-spacing-2 border border-slate-500 ...">
        <thead>
          <tr>
            <th className="border border-slate-600 ...">time</th>
            <th className="border border-slate-600 ...">times ago</th>
          </tr>
        </thead>
        <tbody>
          {dateTimes.map((time, i) => {
            return (
              <tr className="text-center" key={i}>
                <td className="border border-slate-700 ...">{time}</td>
                <td className="border border-slate-700 ...">
                  <DisplayTime rawTime={time} format="DD-MM-YYYY, HH:mm:ss" />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
