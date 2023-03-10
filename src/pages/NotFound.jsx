import React from 'react'

export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="mx-auto align-middle text-center w-fit">
        <h1 className='text-3xl my-20'>404 - Page Not Found</h1>
        <img className="mx-auto my-20" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDE2MWZlMzgxOWMyMDkzNWY4YTgyZTU0NGFjN2IyMjYwZTRhODljOCZjdD1n/6W3l9ji6YMeztCHhuX/giphy.gif" alt="404" />
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      </div>
    </div>
  )
}
