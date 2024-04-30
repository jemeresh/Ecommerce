import React from 'react'
import history from 'history'

const LogButton = () => {

  return (
    <div>
      <button type='button' id="logs_button" className="flex bg-green-200 hover:bg-green-600 font-semibold hover:text-white px-2 rounded-full border hover:border-green-800" onClick={() => history.push('/logList')}>Logs</button>
    </div>
  )
}

LogButton.propTypes = {}

export default React.memo(LogButton)

