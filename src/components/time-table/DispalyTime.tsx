import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { useCallback, useEffect, useState } from 'react'

dayjs.extend(duration)
dayjs.extend(customParseFormat)

interface IProps {
  rawTime: string
  format: string
}

export const DisplayTime = ({ rawTime, format }: IProps) => {
  const [time, setTime] = useState<string>('')

  const getTimeDuration = useCallback(
    (rawTime: string, format: string): string => {
      const now = dayjs()

      if (!dayjs(rawTime, format).isValid()) return 'invalid time'

      const diff = now.diff(dayjs(rawTime, format))
      const duration = dayjs.duration(diff)

      return `${duration.hours()}h ${duration.minutes()}m ${duration.seconds()}s ago`
    },
    [setTime]
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeDuration(rawTime, format))
    }, 1000)

    return () => clearInterval(interval)
  }, [rawTime])

  return <>{time}</>
}
