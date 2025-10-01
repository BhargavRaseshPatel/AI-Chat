import React from 'react'

const HomePage = () => {
    return (
        <div className='h-full w-full flex justify-center flex-col items-center'>
            <div className='h-full w-full flex justify-center flex-col items-center gap-2' >
                <h1 className='text-[28px] '>How Can I Help You Today ?</h1>
                <img src="src/assets/bot-icon.svg" alt="" className='h-[100px] w-[100px]' />
            </div>

            <div className='absolute bottom-16 left-4 w-full'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-3 mb-10'>
                    <div className='home-card'>
                        <h2>Hi, what is the weather</h2>
                        <p>Get immediate AI generated response</p>
                    </div>

                    <div className='home-card'>
                        <h2>Hi, what is my location</h2>
                        <p>Get immediate AI generated response</p>
                    </div>

                    <div className='home-card'>
                        <h2>Hi, what is the temperature</h2>
                        <p>Get immediate AI generated response</p>
                    </div>

                    <div className='home-card'>
                        <h2>Hi, how are you</h2>
                        <p>Get immediate AI generated response</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage