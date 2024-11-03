const formatDate = (date: Date): string =>
  new Date(date).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default formatDate;
