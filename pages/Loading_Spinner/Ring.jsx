import React from 'react'

const Ring = ({height,width}) => {
    const heightPx = `${height}px`
    const widthPx = `${width}px`
  return (
    <div className=''>
<svg className='my-4' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: "auto", display: "block" }} width={widthPx} height={heightPx} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <g>
          <circle cx="73.801" cy="68.263" fill="#ef00ff" r="3">
            <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="0s" />
          </circle>
          <circle cx="68.263" cy="73.801" fill="#ff7f00" r="3">
            <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.062s" />
          </circle>
          <circle cx="61.481" cy="77.716" fill="#00d2ff" r="3">
            <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.125s" />
          </circle>
          <circle cx="53.916" cy="79.743" fill="#00ff08" r="3">
            <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.187s" />
          </circle>
          <circle cx="46.084" cy="79.743" fill="#0078ff" r="3">
            <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.25s" />
          </circle>
          <circle cx="38.519" cy="77.716" fill="#ef00ff" r="3">
            <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.312s" />
          </circle>
          <circle cx="31.737" cy="73.801" fill="#ff7f00" r="3">
            <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.375s" />
          </circle>
          <circle cx="26.199" cy="68.263" fill="#00d2ff" r="3">
            <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.437s" />
          </circle>
          <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;0 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" />
        </g>
      </svg>
    </div>
  )
}

export default Ring