export const getTaskById = async (id) => {
  const res = await fetch("/api/tasks");
  const data = await res.json();
  return data.find(t => t.id === id);
};