import { Square, Circle } from "@/components/Formas";
import { Person } from "@/components/Person";
import { Card } from "@/components/Card";
import { peopleList } from "@/data/peopleList";

export default function Page() {
  return (
    <div>
      <ul>
        {peopleList.map((person) => (
          <li key={person.id}>
            {" "}
            {person.id} - {person.name}
          </li>
        ))}
      </ul>

      <h1 className="font-bold text-lg">Olá mundo!</h1>
      <Card phrase="Alguma frase top." author="Coach de milhões" />
      <Square />
      <Circle />
      <Person
        name="Tayse Rosa"
        avatar="https://www.github.com/tayserosa.png"
        roles={["CEO WPCode Brasil"]}
      />
    </div>
  );
}
