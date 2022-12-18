import "./Loading.css";
export const Loading = () => {
  return (
    <div className="mx-auto text-center">
      <div class="spinner-border text-danger spinner" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <p className="text-center">
        <strong>Cargando...</strong>
      </p>
    </div>
  );
};
