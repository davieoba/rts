import React from "react"

interface ChildProps {
  color?: string,
  onClick?(): void,
  children: React.ReactNode
}

export const Child: React.FC<ChildProps> = ({ children, color, onClick }) => {
  return (
    <div>
      {color ?? ''}
      <button onClick={onClick}>click me !</button>
      {children}
    </div>
  )
}