import "./App.css";

function App() {

  // Telefon nesnesi
  const telefon = {
    marka: "Apple",
    model: "iPhone 15",
    yil: 2023
  };

  // Destructuring
  const { marka, model, yil } = telefon;

  // Template literals
  const mesaj = `Seçtiğiniz telefon: ${marka} ${model}. Üretim yılı: ${yil}.`;

  return (
    <div className="container">
      <h1>Telefon Bilgisi</h1>

      <div className="card">
        <p>{mesaj}</p>
      </div>
    </div>
  );
}

export default App;