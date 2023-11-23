export async function GET(request) {
  const users = [
    { id: 1, name: "Ayan" },
    { id: 2, name: "John" },
    { id: 3, name: "Rashy" },
  ];
  return new Response(JSON.stringify(users));
}
