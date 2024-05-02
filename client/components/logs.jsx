import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Header from './header'
import Head from './head'

import { getLogsFromServer } from '../redux/reducers/logs.js'


const LogList = () => {

  const dispatch = useDispatch()
  const logsFile = useSelector((store) => store.logs.logs)

  useEffect(() => {
    dispatch(getLogsFromServer())
    return () => {} // для того чтобы избежать лишних рендеров didAnmout?
  }, [])

  return (
    <div>
      <Head title ="Logs"/>
      <Header />
        <div className="flex flex-col h-full">
          {logsFile.map((string, index) => {
            return (
            <div key={`log-${index}`}>
              {string}
            </div>)
          })}
         </div>
    </div>
  )
}

LogList.propTypes = {}

export default React.memo(LogList)
