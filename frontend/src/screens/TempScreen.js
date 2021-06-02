import React from 'react'
import ReactPlayer from 'react-player'

const TempScreen = () => {
    return (
        <div>
            <ReactPlayer
                url={[
                    'https://www.youtube.com/watch?v=oUFJJNQGwhk',
                    'https://www.youtube.com/watch?v=jNgP6d9HraI'
                ]}
            />

        </div>
    )
}

export default TempScreen