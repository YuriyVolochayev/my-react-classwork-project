// // export default function OrderForm() {

// //   const handleOrder = (formData: FormData) => {
// //     const restrictions = formData.getAll("restrictions") as string[];
// //     console.log("Dietary restrictions:", restrictions);
// //   };

// //   return (
// //     <form action={handleOrder}>
// //       <fieldset>
// //         <legend>Dietary restrictions:</legend>
// //         <label>
// //           <input type="checkbox" name="restrictions" value="vegan" />
// //           Vegan
// //         </label>
// //         <label>
// //           <input type="checkbox" name="restrictions" value="gluten-free" />
// //           Gluten-free
// //         </label>
// //         <label>
// //           <input type="checkbox" name="restrictions" value="nut-free" />
// //           Nut-free
// //         </label>
// //       </fieldset>

// //       <button type="submit">Submit</button>
// //     </form>
// //   );
// // }

//==============================================================

// // export default function OrderForm() {

// //   const handleOrder = (formData: FormData) => {
// // 	  const delivery = formData.get("delivery") as string;
// // 	  console.log("Delivery:", delivery);
// //   };

// //   return (
// //     <form action={handleOrder}>
// //       <fieldset>
// //         <legend>Delivery method:</legend>

// //         <label>
// //           <input type="radio" name="delivery" value="pickup" defaultChecked />
// //           Pickup
// //         </label>
// //         <label>
// //           <input type="radio" name="delivery" value="courier" />
// //           Courier
// //         </label>
// //         <label>
// //           <input type="radio" name="delivery" value="drone" />
// //           Drone delivery
// //         </label>
// //       </fieldset>

// //       <button type="submit">Place order</button>
// //     </form>
// //   );
// // }

//==============================================================
// import { useId } from "react";

// export default function OrderForm() {
//   const selectId = useId();

//   const handleOrder = (formData: FormData) => {
//     const deliveryTime = formData.get("deliveryTime") as string;
//     console.log("Preferred delivery time:", deliveryTime);
//   };

//   return (
//     <form action={handleOrder}>
//       <label htmlFor={selectId}>Preferred delivery time</label>
//       <select name="deliveryTime" id={selectId} defaultValue="">
//         <option value="">-- Choose delivery time --</option>
//         <option value="morning">Morning (8:00–12:00)</option>
//         <option value="afternoon">Afternoon (12:00–16:00)</option>
//         <option value="evening">Evening (16:00–20:00)</option>
//       </select>

//       <button type="submit">Place order</button>
//     </form>
//   );
// }

//==============================================================
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function App() {
//   const [person, setPerson] = useState(null);

//   useEffect(() => {
// 	  console.log('Effect ran!');
//     axios
//       .get('https://swapi.info/api/people/1')
//       .then((response) => setPerson(response.data));
//   }, []);
  
//   console.log('App rendred!');

//   return (
//     <>
//       <pre>{JSON.stringify(person, null, 2)}</pre>
//     </>
//   );
// }
//==============================================================
// src/App.tsx

// function Product() {
//   return (
//     <div>
//       <h2>Cookies</h2>
//       <p>Price: 999 credits</p>
//     </div>
//   );
// }
//==============================================================
// export default function App() {
//   return (
//     <>
//       <h1>Products</h1>

//       <Product />
//       <Product />
//       <Product />
//     </>
//   );
// }
//==============================================================
// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function App() {
//     const [count, setCount] = useState(1);
//     const [person, setPerson] = useState(null);

//     useEffect(() => {
//         console.log('effect run');

//         axios
//             .get(`https://swapi.info/api/people/${count}`)
//             .then((response) => setPerson(response.data));
        
        
//     }, [count]);
    
//     console.log('App rendered');
    
//     return (
//         <>
//             <h2>The count is {count} </h2>
//             <button onClick={() => setCount(count + 1)}>Get next character</button>
//             <pre>{JSON.stringify(person, null, 2)}</pre>
//         </>
//     );
// }
//==============================================================
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function App() {
//   const [count, setCount] = useState(1);
//   const [person, setPerson] = useState(null);

//   useEffect(() => {
// 	  // 1. Оголошуємо асинхронну функцію
//     async function fetchCharacter() {
//       const response = await axios.get(`https://swapi.info/api/people/${count}`);
//       setPerson(response.data);
//     }
		
// 		// 2. Викликаємо її одразу після оголошення
//     fetchCharacter();
//   }, [count]);

//   return (
//     <>
//       <h2>The count is {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Get next character</button>
//       <pre>{JSON.stringify(person, null, 2)}</pre>
//     </>
//   );
// }


//=========================================
// import { useState, useEffect } from "react";

// export default function App() {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log("You can see me only once!");
//   }, []);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

//==============================================================

// import Timer from './Timer';

// export default function App() {
//   return (
//     <>
//       <Timer />
//     </>
//   );
// }

//==============================================================

// src/App.tsx

// import { useState } from 'react';
// import Timer from './Timer';

// export default function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? 'Hide timer' : 'Show timer'}
//       </button>
//       {isOpen && <Timer />}
//     </>
//   );
// }

//==============================================================
// src/components/App.tsx
// import { useState } from 'react';
// import Modal from './Modal/Modal';

// export default function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);

//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div>
//       <h1>Main content of the page</h1>
//       <button onClick={openModal}>Open modal</button>
//       {isModalOpen && <Modal onClose={closeModal} />}
//     </div>
//   );
// }

// //=========================================

// import { useState, useEffect } from 'react';

// // export default function App() {
// //   const [clicks, setClicks] = useState(() => {
// //     const savedClicks = localStorage.getItem('saved-clicks');
// //     if (savedClicks !== null) {
// //       return JSON.parse(savedClicks);
// //     }
// //     return 0;
// //   });

// //   useEffect(() => {
// //     localStorage.setItem('saved-clicks', JSON.stringify(clicks));
// //   }, [clicks]);

// //   return (
// //     <div>
// //       <button onClick={() => setClicks(clicks + 1)}>
// //         You clicked {clicks} times
// //       </button>
// //       <button onClick={() => setClicks(0)}>Reset</button>
// //     </div>
// //   );
// // }


// //=========================================

// import { useState, useEffect } from "react";

// export default function App() {
//   const [clicks, setClicks] = useState(0);

//   // 1. Тільки один раз після монтування
//   useEffect(() => {
//     console.log("You can see me only once!");
//   }, []);

//   // 2. Кожного разу, коли змінюється clicks
//   useEffect(() => {
//     console.log("Clicks updated:", clicks);
//   }, [clicks]);

//   // 3. При кожному рендері (бо без залежностей)
//   useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
//   });

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// }
