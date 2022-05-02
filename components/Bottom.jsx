// components/bottom.js
import Style from '../styles/Bottom.module.css';
export default function Bottom() {
  return (
    <div className={Style.bottom}>
      <p>Powered by <a href="https://vercel.com" target="_blank" rel="noreferrer">Vercel.com</a></p>
    </div>
  )
}