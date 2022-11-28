import React from 'react'
import AnagramForm from './AnagramForm'

export default function Card({ children }) {
  return (
    <div className="flex flex-col w-1/3 p-5 bg-rose-200">
      {children}
    </div>
  )
}
