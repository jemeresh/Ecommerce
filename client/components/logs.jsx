import React, {  useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { getLogsFromServer } from '../redux/reducers/logs.js'


const logList = () => {

  const dispatch = useDispatch()
  const logs = useSelector((s) => s.logs.data)

  useEffect(() =>{
    dispatch(getLogsFromServer())
  },[])

  return (
    <div className=" flex m-1 justify-between w-full">
      <div className=".logs">{logs}</div>
    </div>
  )
}

logList.propTypes = {}

export default React.memo(logList)
