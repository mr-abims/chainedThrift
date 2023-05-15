import React, {useState} from 'react'

function Switch() {
    const [toggle, setToggle] = useState(false)
    const toggleClass = ' transform translate-x-6';
    return (
        <div
            className={`md:w-14 md:h-7 w-12 h-6 flex items-center ${toggle === false?'bg-white-1' :'bg-purple-1'}  rounded-full p-1 cursor-pointer`}
            onClick={() => setToggle(!toggle)}
        >
            {/* Switch */}
            <div
                className={`${toggle === false? 'bg-purple-1': 'bg-white'} md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform ${toggle === false? null : toggleClass}`}
            ></div>
        </div>
    )
}

export default Switch
