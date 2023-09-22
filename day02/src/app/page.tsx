import Image from 'next/image'
import Slider from './components/Slider'

const images:any = ['https://i.pinimg.com/originals/71/9e/80/719e80760999b4c355a723224120eb07.png','https://i.pinimg.com/originals/71/9e/80/719e80760999b4c355a723224120eb07.png'];
export default function Home() {
  return (
    <>
          <nav className="bg-blue-500 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <a href="#" className="text-white text-2xl font-bold">Day 02 </a>
      <ul className="flex space-x-4">
        <li><a href="#" className="text-white">Home</a></li>
        <li><a href="#" className="text-white">About</a></li>
        <li><a href="#" className="text-white">Services</a></li>
        <li><a href="#" className="text-white">Contact</a></li>
      </ul>
    </div>
  </nav>

  <Slider images={images} />
    </>
  )
}
