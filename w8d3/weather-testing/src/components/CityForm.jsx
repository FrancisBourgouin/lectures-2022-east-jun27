import useForm from "../hooks/useForm";

export default function CityForm(props) {
  const initialValues = { city: "" };
  const { formData, handleChange, handleSubmit } = useForm(initialValues, props.onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="city"
        placeholder="Enter city name"
        value={formData.city}
        onChange={handleChange}
      />
      <button type="submit">Fetch weather!</button>
    </form>
  );
}
