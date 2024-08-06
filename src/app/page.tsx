import Spline from '@splinetool/react-spline/next';
import './globals.css';  // Import any necessary styles

export default function Home() {
  return (
    <main className='h-full'>
      <Spline
        scene="https://prod.spline.design/q4Z5zYmo0DuPLzPM/scene.splinecode" 
        className='w-full h-full'
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center w-full">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          We've Got You Covered
        </h1>
      </div>
    </main>
  );
}
