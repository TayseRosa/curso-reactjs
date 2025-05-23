import { Square, Circle } from "@/components/Formas";
import { Person } from "@/components/Person";
import { Card } from "@/components/Card";
import { peopleList } from "@/data/peopleList";

export default function Page() {
  const chemists = peopleList.filter(
    (person) => person.profession === "chemist"
  );

  return (
    <div>
      {chemists.length > 0 && (
        <>
          <h3>Lista de químicos</h3>
          <ul>
            {chemists.map((person) => (
              <li>
                {person.name} - {person.profession}
              </li>
            ))}
          </ul>
        </>
      )}

      <hr />

      <ul>
        {peopleList.map((person) => (
          <li key={person.id}>
            {person.id} - {person.name} - {person.profession}
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
