//Here we show all NON-COMPLETED TO-DOS pending tasks API
import React from 'react'
import Dlayout from "../components/layouts/Dlayout";
import axios from 'axios';
import Router from 'next/router'

import { MdDelete } from "react-icons/md";

export default function Overdue ({data}){

    const deleteHandler = (e) => {
      let deleting = e.target.parentElement.id
      axios.delete(`http://localhost:3000/api/removeTask/?id=${deleting}`)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
      Router.reload(window.location.pathname);
    }

    const handlerId = (e) => {
      if(e.target.checked === true){
        let identify = e.target.value
        axios.patch(`http://localhost:3000/api/taskDone/?id=${identify}`)
        .then(res => {
          console.log(res)
        })
        .catch(err => console.log(err))
        Router.reload(window.location.pathname);
      }
    }

  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-12 mx-auto flex flex-wrap">
      <div className="flex flex-wrap w-full">
        <div className="p-2 lg:w-1/2 md:w-full">
          <h2 className='text-xl font-semibold mb-2 text-center text-amber-300'>Remaining ToDos</h2>
          {
            data.map((todos,i) => (
              <div className="flex border-2 my-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col" key={i}>
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <input id={i} onClick={handlerId} type="checkbox" value={todos._id} className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{todos.task}</h2>
                  <MdDelete className='text-2xl float-right cursor-pointer' id={todos._id}  
                  onClick={deleteHandler}/>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </section>
  )
}

Overdue.Layout = Dlayout;

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/overdueTasks`)
  const data = await res.json()

  return { props: { data } }
}