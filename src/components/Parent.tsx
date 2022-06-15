import { Child } from "./Child";

const handleClick = () => {
  console.log('clicked')
}

export const Parent: React.FC = () => {
  return (
    <div>
      <Child color="red" onClick={handleClick}>
        <div> code ... </div>
      </Child>
    </div>
  )
}