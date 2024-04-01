const Icon = ({ icon: Icon }: { icon: any }) => {
  return (
    <>
      <Icon className='cursor-pointer transition-all hover:opacity-50 active:scale-75' style={{ fontSize: '24px' }} />
    </>
  )
}
export default Icon