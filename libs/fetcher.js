export default async function fetcher(...args) {
  const res = await fetch(...args);
  return await res.json();
}

// incase you wanna use axios as the fetcher

// const fetcher = (...args) => axios.get(...args).then((res) => res.data);
// export default fetcher;
