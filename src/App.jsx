
import './App.css'
import Tab from './components/Tab'
import Practice from './components/Practice'

function App() {
  const tabsData = [
    {
      label: "Profile",
      content: "Profile Content."
    },
    {
      label: "Dashboard",
      content: "Dashboard Content."
    },
    {
      label: "Setting",
      content: "Setting Content."
    },
    {
      label: "Invoice",
      content: "Invoice Content."
    },
    
  ];

  return (
    <>
     {/* <Practice/> */}
     <Tab tabsData={tabsData}/>
    </>
  )
}

export default App
