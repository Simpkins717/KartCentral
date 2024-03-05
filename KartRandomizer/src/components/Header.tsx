export default function Header() {
  return (
    <div className='border-b-2 border-purple-800 px-8 py-4 bg-slate-50'>
      <div className='flex justify-between items-center'>
        <a href='/' className='text-2xl'>
          Kart Enjoyers
        </a>
        <a href='/'>Track Randomizer</a>
        <a href='/carts'>Carts </a>
        <a href='/drivers'>Drivers</a>
      </div>
    </div>
  );
}
