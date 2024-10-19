import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";


export default function App() {
  const[category,setcategory] = useState("general");

  return (
    <div>
      <Navbar setcategory={setcategory}/>
      <NewsBoard category={category} />
    </div>
  )
}
