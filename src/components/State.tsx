import React, { useState, useRef } from "react"


export const State: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const [data, setData] = useState<string>('')
  const [guest, setGuest] = useState<Array<string>>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value)
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setGuest([...guest, data])
    // setData('')
    if (!inputRef.current) {
      return
    }
    inputRef.current.focus()

  }

  return (
    <div>
      <h1> Guest List: </h1>

      {guest.map((el) => {
        return <li key={el}> {el} </li>
      })}

      <input type="text" onChange={handleChange} name='guest' value={data} ref={inputRef} /> <br />
      <button onClick={handleClick}> add </button>
    </div>
  )
}