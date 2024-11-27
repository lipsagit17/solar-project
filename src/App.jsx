import Home from "./pages/Home"
npm i react-router


function App() {

  return (
    ReactDOM.createRoot(root).render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
);
    </div>
  )
}

export default App
