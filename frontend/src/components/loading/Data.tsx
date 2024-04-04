import { Empty, Skeleton } from "antd"
import { useEffect, useState } from "react"

const NoData: React.FC = (): JSX.Element => {
  const [data, setData] = useState<boolean>(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setData(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      {data ? <Empty /> : <Skeleton />}
    </>
  )
}
export default NoData