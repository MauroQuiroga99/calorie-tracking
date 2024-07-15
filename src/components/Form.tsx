import { useState, ChangeEvent, FormEvent, Dispatch } from "react";
import { categories } from "../data/categories";
import { Activity } from "../types";
import { ActivityAcitions } from "../reducers/activityReducer";

type FormProps = {
  dispatch: Dispatch<ActivityAcitions>;
};

export default function Form({ dispatch }: FormProps) {
  const [activity, setActivity] = useState<Activity>({
    category: 1,
    name: "",
    calories: 0,
  });

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const isNumberField = ["category", "calories"].includes(e.target.id);
    console.log(isNumberField);
    setActivity({
      ...activity,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value,
    });
  };

  const isValidActivity = () => {
    const { name, calories } = activity;
    return name.trim() !== "" && calories > 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("...Submit");
    dispatch({ type: "save-activity", payload: { newActivity: activity } });
  };
  return (
    <form
      className="space-y-5 bg-white shadow p-10 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className=" grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">
          {" "}
          Categoria:
        </label>
        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {" "}
              {category.name}{" "}
            </option>
          ))}
        </select>
      </div>
      <div className=" grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">
          {" "}
          Actividad:
        </label>
        <input
          id="name"
          type="text"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta, Trotar"
          value={activity.name}
          onChange={handleChange}
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
          value={activity.calories}
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        value={activity.category === 1 ? "Guardar Comida" : "Guardar Ejercicio"}
        className="bg-gray-500 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-30 "
        disabled={!isValidActivity()}
      />
    </form>
  );
}
