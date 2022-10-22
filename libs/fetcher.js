export default async function fetcher(...args) {
  const res = await fetch(...args);
  return await res.json();
}

// you can use axios as well