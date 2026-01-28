import {Routes, Route} from 'react-router-dom'
import ContactUs from './containers/ContactUs.jsx'
import Shop from './containers/Shop.jsx'


function App() {

  return (
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
  )
}

export default App
