import React, { useState } from 'react'

const Practice = () => { 
  const [toggle, setToggle]= useState(false);
  const [description, setDescription]= useState('');
  const [amount, setAmount]= useState('')
  const [transactionType, setTransactionType]= useState('income')
  const [transaction, setTransaction]= useState([]);

  const handleTransaction=()=>{
    const transactionData = {
      id:Date.now(),
      desc: description,
      amount: Number(amount),
      type: transactionType
  }
  setTransaction([...transaction, transactionData])
  setAmount('')
  setDescription('')
}
 
  return (
     <>
    <div className="flex w-screen h-screen bg-slate-300 justify-start overflow-x-hidden items-center flex-col ">
    <h1 className='my-4 font-semibold text-2xl'>Expense Tracker</h1>
    <div className=" flex justify-between items-center w-72">
      <p className='flex flex-col items-center'> YOUR BALANCE <span className='font-semibold'> $0 </span></p>
      <div className="btn">
        {toggle?<>
          <button className='bg-blue-700 px-4 py-1 rounded text-white' onClick={()=> setToggle(false)}>CANCLE</button>
        </>:<>
        <button className='bg-blue-700 px-4 py-1 rounded text-white' onClick={()=> setToggle(true)}>ADD</button>
        </>}
       
      </div>
    </div>
    <div className="flex justify-between mt-5 items-center bg-slate-200 p-3 w-72">
      <div className="ml-2">
        <p className='flex flex-col items-center'>INCOME <span className='font-semibold text-green-600'> $0 </span></p>
      </div>
      <div className="mr-2">
        <p className='flex flex-col items-center'>EXPENSE <span className='font-semibold text-red-700'> $0 </span></p>
      </div>
    </div>
    {toggle?<>
      <div className=" w-72 p-2 border border-black mt-5">
      <h2 className='ml-1'>Add New Transaction</h2>
      <hr className='border border-gray-400'/>
      <div className="mt-3 ml-1">
        <h2> Text </h2>
        <input type='text' value={description} onChange={(e)=> setDescription(e.target.value)} placeholder='Enter text...' className=' rounded mt-1 py-1 px-2 w-64'/>
      </div>
      <div className="mt-3 ml-1">
        <h2> Amount </h2>
        <input type='text' value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder='Enter Amount...' className=' rounded mt-1 py-1 px-2 w-64'/>
      </div>
      <div className=" flex justify-between w-64 px-4 items-center mt-2">
        <div className="ml-3">
          <h2>Income</h2>
          <input type='radio' checked={transactionType==='income'} onChange={(e)=> setTransactionType('income')} className='ml-4' />
        </div>
        <div >
          <h2>Expense</h2>
          <input type='radio' checked={transactionType==='expense'} onChange={(e)=> setTransactionType('expense')} className='ml-5'/>
        </div>
      </div>
      <div className=" ml-2 mt-3 mb-2">
        <button className='bg-blue-700 px-4 py-1 rounded transition delay-100 ease-in-out hover:bg-blue-600 text-white w-64' onClick={handleTransaction}> ADD TRANSACTION </button>
      </div>

       
    </div>
    
    </>
    :
    <>
    </>
    }
     <ul>

{transaction.map((transaction)=>{
  return(
    <div className='flex w-72 bg-slate-400 p-3 justify-between mt-5'>
      <li>{transaction.desc}</li>
      <li> {transaction.type==='income'? '+':'-'} {transaction.amount}</li>
      <div className="btn">
        <button>Delete</button>
      </div>
    </div>
  )
})}
</ul>
    </div>
   
   
     </>
    
  )
}

export default Practice