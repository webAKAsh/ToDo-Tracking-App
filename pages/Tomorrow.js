import React,{useState} from 'react'
import Dlayout from "../components/layouts/Dlayout";
import axios from 'axios'
import Router from 'next/router'


import { MdDelete } from "react-icons/md";

//tomorrowTask api comes here

export default function Tomorrow ({data}) {

  const deleteHandler = (e) => {
    let deleting = e.target.parentElement.id
    axios.delete(`http://localhost:3000/api/removeTask/?id=${deleting}`)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
    Router.reload(window.location.pathname);
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

Tomorrow.Layout = Dlayout;

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/tomorrowTask`)
  const data = await res.json()

  return { props: { data } }
}