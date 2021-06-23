import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Result from "./Result";

const Search = () => {
  const [location, setLocation] = useState("Seatle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown, setAnimal] = useDropdown(
    "Animal",
    "dog",
    ANIMALS
  );
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  const [pets, setPets] = useState([]);

  async function RequestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breedName = breeds.map((breedObj) => breedObj.name);
      setBreeds(breedName);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div>
      <div className="search-params">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            RequestPets();
          }}
        >
          <label htmlFor="location">
            Search
            <input
              id="location"
              value={location}
              placeholder="Location"
              onChange={(event) => setLocation(event.target.value)}
            />
          </label>
          <AnimalDropdown />
          <BreedDropdown />
          <button>Submit</button>
        </form>
        <Result pets={pets} />
      </div>
    </div>
  );
};

export default Search;
