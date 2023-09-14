import ConvertForm from "./(conversion)/ConvertForm";
import ConvertWrapper from "./(conversion)/ConvertWrapper";
import NavBar from "./components/NavBar";

async function getCurrencies() {
  const res = await fetch(
    "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_UjiQbrMaaKm9IjroOuk8z2JivoIcMPVb5Wd9sJIp",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.data;
}

export default async function HomePage() {

 const currencies = await getCurrencies();

  return (
    <div className="bg-white">
      <div className="relative isolate px-6  lg:px-8">
        
      <NavBar  />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-8 sm:py-20 lg:py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Convert Currencies with Ease
            </h1>
            <p className="mt-6 text-lg  leading-8 text-gray-600">
              Your All-in-One Solution for Quick, Accurate, and Hassle-Free
              Currency Conversions.
            </p>
            <ConvertWrapper currencies={currencies}/> 
          </div>
        </div>
       
      </div>
    </div>
  );
}
