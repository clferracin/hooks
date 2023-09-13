import { memo } from "react";

interface SearchProps {
  onChange: (text: string) => void; 
}

function Search({onChange} : SearchProps) {
  console.log('renderizou Search...')
  return (
    <input 
      type="text" 
      placeholder="Search users..."
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default memo(Search)