import { Data } from '@jestory/data';
export interface KaterProps {
  title: string;
}

export function Kater(props: KaterProps) {
  const kat = Data['A'];
  return (
    <div>
      <h1>Welcome to {props.title}!</h1>
      <p>{kat}</p>
    </div>
  );
}

export default Kater;
