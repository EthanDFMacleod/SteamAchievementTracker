import React from 'react'
import '../Styles/Home.css'

function Home() {
  return (
    <div className='page'>
        <div className='call-to-action'>
            <div className='cta-title'>Steam Achievement <span className='styled-words'>Tracker</span></div>
            <div className='cta-content'>The achievement tracker for all your steam achievement needs: Based on <span className='styled-words'>YOUR</span> content and tailored for <span className='styled-words'>YOUR</span> needs</div>
        </div>
        <div className='widgets'></div>
    </div>
  )
}

export default Home