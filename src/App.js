import './App.css';
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import PagePrincipal from './Page/PagePrincipal';
import List from './Content/List';

// function App() {
//   return (
//     <div className="App">
//       <Header></Header>     
//       <Content></Content>
//     </div>
//   );
// }

// export default App;


export default function App() {
  const [lang, setLang] = React.useState('fr')
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<PagePrincipal lang={lang} setLang={setLang} />} />
        <Route path="/pokemon" element={<List />}>
          <Route path=":pokeId" element={<List />} />
        </Route>

      </>
    )
  );

  return <RouterProvider router={router} />;
}