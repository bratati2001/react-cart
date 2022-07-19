import {Link} from 'react-router-dom';

const Navigation = () => {
  const cartstyle ={
    background:'#F59E0D',
    display:'flex',
    padding:'6px 12px',
    borderRadius:'50px',
  }
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
      <Link to="/">
        <img style={{height:45}} src="/images/logo.jpg"alt="logo"/>
      </Link>
      <ul className="flex items-center">
        <li className='ml-6'><Link to="/">Home</Link></li>
        <li className='ml-6'><Link to="/products">products</Link></li>

        <li className='ml-6'>
          <Link to ="/cart">
            <div style={cartstyle}>
              <span className='text-black'>10</span>
              <img style={{height:30,width:30}}  src='/images/cart.jpg'alt='cart.jpg'></img>

            </div>
          </Link>
        </li>

      </ul>
  
      </nav>
    </>
  )
}

export default Navigation;



