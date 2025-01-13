import React, { useState } from 'react'

const Tab = ({tabsData}) => {
  const [currIndexContent, setCurrIndexContent]= useState(0)
  return (
    <div className='tabs-container'>
      <div className='tabs-header'>
        {
          tabsData.map((data, index)=>{
            return <button className={`${currIndexContent===index?'active':''}`} onClick={()=> setCurrIndexContent(index)} >{data.label}</button>
          })
        }
      </div>
      <div className='tabs-content'>
       {tabsData[currIndexContent].content}
      </div>
    </div>
  )
}

export default Tab