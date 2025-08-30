import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Forms from './components/Forms'
import Buttons from './components/Buttons'
import Login from './components/Login'
import Vaidity_check from './components/Vaidity_check'
import Props_page from './components/Props_page'
import Fetch_data from './components/Fetch_data'
import Search from './components/Search'

import Users from './components/Users'
import Home from './components/Home'


import Parent from './components/Parent'
import ChildA from './components/ChildA'
import ChildB from './components/ChildB'

import Validation from './components/Validation'

import Numbers from './components/Numbers'
import Stopwatch from './components/Stopwatch'

import Toggle from './components/Toggle'
import Faq from './components/Faq'

import Tabs from './components/Tabs'
import Modal from './components/Modal'
import Products from './components/Products'


const App = () => {
  return (
      <BrowserRouter>
      <Routes>

          <Route
        path='/home'
        element={
          <>
          <Home/>
          </>
        }
        />



            <Route
        path='/users/:id'
        element={
          <>
          <Users/>
          </>
        }
        />




        <Route
        path='/forms'
        element={
          <>
          <Forms/>
          </>
        }
        />

        <Route
        path='/buttons'
        element={
          <>
          <Buttons/>
          </>
        }
        />

         <Route
        path='/login'
        element={
          <>
          <Login/>
          </>
        }
        />


         <Route
        path='/validity'
        element={
          <>
          <Vaidity_check/>
          </>
        }
        />



         <Route
        path='/props'
        element={
          <>
          <Props_page/>
          </>
        }
        />


         <Route
        path='/fetch'
        element={
          <>
          <Fetch_data/>
          </>
        }
        />


          <Route
        path='/search'
        element={
          <>
          <Search/>
          </>
        }
        />



             <Route
        path='/parent'
        element={
          <>
          <Parent/>
          </>
        }
        />


            <Route
        path='/ChildA'
        element={
          <>
          <ChildA/>
          </>
        }
        />


            <Route
        path='/ChildB'
        element={
          <>
          <ChildB/>
          </>
        }
        /> 

           <Route
        path='/Validation'
        element={
          <>
          <Validation/>
          </>
        }
        /> 

        <Route
        path='/numbers'
        element={
          <>
          <Numbers/>
          </>
        }
        /> 


         <Route
        path='/watch'
        element={
          <>
          < Stopwatch/>
          </>
        }
        /> 


         <Route
        path='/toggle'
        element={
          <>
          < Toggle/>
          </>
        }
        /> 


        <Route
        path='/faq'
        element={
          <>
          < Faq/>
          </>
        }
        /> 




        <Route
        path='/tabs'
        element={
          <>
          < Tabs/>
          </>
        }
        />

        

        <Route
        path='/modal'
        element={
          <>
          < Modal/>
          </>
        }
        />  


        <Route
        path='/'
        element={
          <>
          < Products/>
          </>
        }
        />  


       









       

      </Routes>
      </BrowserRouter>
  )
}

export default App