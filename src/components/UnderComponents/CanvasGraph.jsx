import React, {useRef} from 'react';

const CanvasGraph = (props) => {

    let canvas = useRef(null)
    let canvasParent = useRef(null)
    if (canvas.current) {
        canvas.current.height = canvasParent.current.offsetHeight - 20
        canvas.current.width = canvasParent.current.offsetWidth - 20
        let canvasHeight = canvas.current.height
        let canvasWidth = canvas.current.width
        let amountPoint = 30
        let PointX = 0
        let pointArray = props.list.map((point) => {
            return point.bid
        })
        let distance = canvasHeight / (Math.max(...pointArray) + 6)

        let ctx = canvas.current.getContext('2d');
        ctx.strokeStyle = "#a3bbc9"
        ctx.beginPath();
        for (let i = 0; i < pointArray.length - 1; i++) {
            let StartPointY = canvasHeight - (pointArray[i] * distance);
            let EndPointY = canvasHeight - (pointArray[i + 1] * distance);
            ctx.moveTo(PointX, StartPointY);
            PointX += canvasWidth / (amountPoint - 1);
            ctx.lineTo(PointX, EndPointY);
        }
        ctx.stroke()
    }
    return (
        <div className="graffic-block" ref={canvasParent}>
            <canvas ref={canvas}>123</canvas>
        </div>
    )
}

export default CanvasGraph;