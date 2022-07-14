import React from 'react'

function Part4() {
    return (
        <div className='part4'>
            <div className='part4-divider' />
            <div className='part4-divH6-container'>
                <h6 className='part4-h6'>Coding</h6>
            </div>

            <ul className="part4-ul">
                <li className="part4-li">
                    <span>HTML</span>
                    <span>95%</span>
                    <svg className='part4-svg'>
                        <path d="M 0,0.86 L 250,0.86"></path>
                    </svg>
                </li>
                <li className="part4-li">
                    <span>CSS</span>
                    <span>95%</span>
                    <svg className='part4-svg'>
                        <path d="M 0,0.86 L 250,0.86"></path>
                    </svg>
                </li>
                <li className="part4-li">
                    <span>Javascript</span>
                    <span>99%</span>
                    <svg className='part4-svg'>
                        <path d="M 0,0.86 L 250,0.86"></path>
                    </svg>
                </li>
            </ul>

        </div>
    )
}

export default Part4