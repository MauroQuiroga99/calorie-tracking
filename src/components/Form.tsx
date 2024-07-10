import { categories } from "../data/categories";

export default function Form() {
  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className=" grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">
          {" "}
          Categoria:
        </label>
        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
        >
          {categories.map((category) => (
            <option key={category.id}> {category.name} </option>
          ))}
        </select>
      </div>
      <div className=" grid grid-cols-1 gap-3">
        <label htmlFor="activity" className="font-bold">
          {" "}
          Actividad:
        </label>
        <input
          id="activity"
          type="text"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta, Trotar"
        />
      </div>
      <div className=" grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">
          {" "}
          Calorías:
        </label>
        <input
          id="calories"
          type="text"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. Calorías, 200, 500"
        />
      </div>

      <input type="submit" value={'Guardar comida o ejercicio'} className="bg-gray-500 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer" />
    </form>
  );
}
