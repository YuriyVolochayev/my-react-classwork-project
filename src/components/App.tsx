// import OrderForm from "./OrderForm";

// export default function App() {
//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const form = event.currentTarget;
    
//     const formData = new FormData(form);
//     const username = formData.get("username");
//     console.log("Username:", username);
    
//     form.reset();
//   };

//   return (
// 	  <form onSubmit={handleSubmit}>
//       <input type="text" name="username" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default function App() {
//   const handleSubmit = (formData: FormData) => {
// 	  console.log("Form submitted");
//   };

//   return (
// 		<form action={handleSubmit}>
//       <input type="text" name="username" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }


// export default function App() {
//   const handleSubmit = (formData: FormData) => {
// 	  const username = formData.get("username") as string;
//     console.log("Name:", username);
//   };

//   return (
// 		<form action={handleSubmit}>
//       <input type="text" name="username" defaultValue="John Doe"/>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default function App() {
//   const handleOrder = (data: string) => {
//     console.log("Order received from:", data);
//     // можна зберегти замовлення, викликати API, показати повідомлення тощо
//   };

//   return (
//     <>
//       <h1>Place your order</h1>
//       <OrderForm onSubmit={handleOrder} />
//     </>
//   );
// }

// src/components/App.tsx
import axios from "axios";
import SearchForm from "./SearchForm";
import { useState } from 'react'

// export default function App() {

//   const handleSearch = async (topic: string) => {
//     // Тут будемо виконувати HTTP-запит
//     console.log(topic);
//   };

//   return (
//     <>
//       <SearchForm onSubmit={handleSearch} />
//     </>
//   );
// }
// interface Article {
//   objectID: string;
//   title: string;
//   url: string;
// }

// interface ArticlesHttpResponse {
//   hits: Article[];
// }

// export default function App() {

//   const handleSearch = async (topic: string) => {
// 	  // Виконуємо HTTP-запит
//     const response = await axios.get<ArticlesHttpResponse>(
//       `https://hn.algolia.com/api/v1/search?query=${topic}`
//     );
//     console.log(response.data); // об'єкт з властивістю hits
//   };

//   return (
//     <>
//       <SearchForm onSubmit={handleSearch} />
//     </>
//   );
// }

// src/components/App.tsx

/* Решта коду файла */

interface Article {
  objectID: string;
  title: string;
  url: string;
}

interface ArticlesHttpResponse {
  hits: Article[];
}

// src/components/App.tsx

/* Решта коду файла */

export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  // 1. Додаємо стан індикатора завантаження
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (topic: string) => {
	  // 2. змінюємо індикатор на true перед запитом
    setIsLoading(true);
    const response = await axios.get<ArticlesHttpResponse>(
      `https://hn.algolia.com/api/v1/search?query=${topic}`
    );
    // 3. Змінюємо індикатор на false після запиту
    setIsLoading(false);
    setArticles(response.data.hits);
  };

  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      {/* 4. Відображаєм повідомлення про завантаження даних в JSX */}
      {isLoading && <p>Loading data, please wait...</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  );
}
