import React from 'react'

import Dlayout from "../components/layouts/Dlayout";

export default function newTask() {

    let storeVal = {
        task : "",
        dueDate : "",
        category : "",
    }

    const formData = (e) => {
        const tasks = e.target[0].value;
        const dateString = e.target[1].value;
        const dueDate = new Date(dateString)

        storeVal.task  = tasks
        storeVal.dueDate = dueDate.toString()
        
        let allTasks = JSON.stringify(storeVal)
        console.log(allTasks)

        fetch("http://localhost:3000/api/addTask",{
            method:'POST',
            body: allTasks,
            headers:{
                'Accept': 'application/json',
                'Content-type':'application/json'
            }
        }).then((response) => {
            return response.json();
        }).then((res) => {
            if(res.status === 201){
                console.log('Task successfully added')
            }
        }).catch((error) => {
            console.log(error)
        })

    }

  return (
    <section className="text-gray-600 body-font relative">
    <div className="absolute inset-0 bg-gray-300">
        <iframe
        width="100%"
        height="100%"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title="map"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        />
    </div>
    <div className="container px-5 py-12 mx-auto flex">
        <div className="lg:w-3/5 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Add your tasks
            </h2>
            <form onSubmit={formData}>
                <label htmlFor="toDoTasks" className="leading-7 text-sm text-gray-600">
                    What have you planned ?
                </label>
                <input
                type="text"
                id="toDoTasks"
                name="toDoTasks"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out relative mb-4"
                />
                <label htmlFor="dueDate" className="leading-7 text-sm text-gray-600">
                    Enter Due date of the task ?
                </label>
                <input
                type="text"
                placeholder='mm-dd-yyyy'
                id="dueDate"
                name="dueDate"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out relative mb-4"
                    />
                <label htmlFor="category" className="leading-7 text-md my-2 text-gray-600">
                    Category
                </label>
                <div className="flex rounded-md shadow-sm relative mb-4" role="group" id="category" name="category" onClick={(e) => storeVal.category = e.target.value}>
                    <button type="button" className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white" value="Home">
                        Home 
                    </button>
                    <button type="button" className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white" value="Office">
                        Office
                    </button>
                    <button type="button" className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white" value="Personal">
                        Personal
                    </button>
                </div>
                <button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Add task
                </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
                Hope, you complete your tasks on time !
            </p>
        </div>
    </div>
    </section>
  )
}

newTask.Layout = Dlayout;
