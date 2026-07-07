import Header from '../components/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import classes from '../styles/RootLayout.module.scss'
function RootLayout(){
  return(
    <div className={classes.div}>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}
export default RootLayout