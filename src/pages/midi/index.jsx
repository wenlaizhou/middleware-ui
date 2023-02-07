import { Button, Card } from "antd"
import React, { useEffect, useState } from "react"

export default (props) => {

    const [play, setPlay] = useState(false)

    const AudioContext = window.AudioContext || window.webkitAudioContext
    const audioCtx = new AudioContext()

    // 振荡器
    const oscillator = audioCtx.createOscillator()
    const gainNode = audioCtx.createGain()
    oscillator.type = "sine" // 正弦波
    oscillator.frequency.value = 440 // A4 频率
    oscillator.detune.value = 0 // 解谐
    gainNode.gain.value = 1 // 音量
    oscillator.start()

    useEffect(() => {
        oscillator.connect(gainNode)
        //gainNode.connect(audioCtx.destination)
    }, [])

    return <Card>
        <Button onClick={(e) => {
            if (play) {
                gainNode.disconnect(audioCtx.destination)
                setPlay(false)
                return
            } else {
                gainNode.connect(audioCtx.destination)
                setPlay(true)
                return
            }
            
            return
        }}>play / pause</Button>
    </Card>
}