import React from 'react'

const page = ({params}: any) => {
const id = params.id
  return (
    <div>
        <iframe src={`https://note-taking-app-umber.vercel.app/preview/${id}`}  width="100%" className='px-10 py-10 bg-gray' height="500px" allowFullScreen></iframe>

    </div>
  )
}

export default page
