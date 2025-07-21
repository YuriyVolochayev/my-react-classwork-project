import { createRoot } from 'react-dom/client'
import './index.css'
import "modern-normalize";
import UserMenu from './components/UserMenu';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// const jsxMarkup = "Jacob";

// const imgUrl = "https://images.app.goo.gl/d7oNR2ifYfpVRPrd7";
//   <>
//     <img src={imgUrl} alt="Jackie" width="320" />
//     <p>HTML in JS?</p>
//   </>

const jsxMarkup = (
  <>
    <UserMenu/>
    {[1, 2, 3, 4, 5, 6, 7].map((value, index) => {
      return <li key={index}>{value}</li>
    })}
  </>
)
createRoot(document.getElementById('root')! as HTMLDivElement).render(jsxMarkup);