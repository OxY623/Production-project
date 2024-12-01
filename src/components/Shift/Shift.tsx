import { useState, useEffect, useTransition, useDeferredValue } from 'react';
import IComment from './Shift.props';

type Loading = boolean;
type IError = string | null;

//helper
const filterBySearch = (entities: IComment[], search: string) =>
  entities.filter((item: IComment) =>
    item.name.concat(item.body).includes(search),
  );

export default function Shift(): JSX.Element {
  const [isPending, startTransition] = useTransition();
  const [comments, setComments] = useState<IComment[] | []>([]);
  const [isLoading, setIsLoading] = useState<Loading>(true);
  const [error, setError] = useState<IError>(null);
  const [search, setSearch] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => setSearch(event.target.value));
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status}`);
        return res.json();
      })
      .then((data) => {
        setComments(data);
      })
      .catch((error) => setError(error.data))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <input type='text' placeholder='Filter' onChange={handleSearch}></input>
      {isPending && <h1>Rendering</h1>}
      <Comments entities={filterBySearch(comments, search)} />
    </div>
  );
}

export function Comments({ entities }: { entities: [] | IComment[] }) {
  let values = useDeferredValue(entities);
  return (
    <ul>
      {values.map((item: IComment | undefined) => {
        if (!item) return null;
        return (
          <li key={item.id}>
            <div style={{ margin: '20px 30px' }}>
              <h3>{item.name}</h3>
              <h4>{item.email}</h4>
              <p>{item.body}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
