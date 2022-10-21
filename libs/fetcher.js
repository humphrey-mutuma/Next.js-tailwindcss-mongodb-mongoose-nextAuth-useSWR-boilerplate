const fetcher = (...args) => axios.get(...args).then((res) => res.data);
export default fetcher;

// incase you wanna use fetch as the fetcher

// export default async function fetcher(...args) {
//   const res = await fetch(...args);
//   return await res.json();
// }