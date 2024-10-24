 import profile from'../../../images/profile.png'

export default function Header() {
  return (
    <header className='flex items-center justify-between md:container mx-auto border-b-2 pb-2'>
      <h1 className='font-bold text-4xl'>Knowledge Cafe</h1>
      <img src={profile} alt="" />

    </header>
  )
}
