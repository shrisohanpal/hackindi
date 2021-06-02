import React from 'react'
import { Container } from 'react-bootstrap'
import ReactPlayer from 'react-player'

const LectureScreen = () =>
{
    return (
        <Container>
            thsi is Lecture Screen

            <div style={{ width: 640, height: 480, position: 'relative' }}>
                <iframe src="https://drive.google.com/file/d/1QlggAyAlFe-kIVSlgrMf9J72v5ETEGpd/preview" width="640" height="480" frameborder="0" scrolling="no" seamless=""></iframe>
                <div div style={{ width: 80, height: 80, position: 'absolute', opacity: 0, right: 0, top: 0 }} > </div >
            </div>
        </Container>
    )
}

export default LectureScreen
