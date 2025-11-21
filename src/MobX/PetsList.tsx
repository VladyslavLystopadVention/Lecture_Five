import { type FormEvent } from "react";
import { observer } from "mobx-react-lite";
import { petOwnerStore } from "./PetOwnerStore";
import { type Pet } from "./PetOwnerStore";
import { v4 as uuid } from 'uuid';

export const PetsList = observer(() => {
  const handleAddPet = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const id = uuid();
    const name = String(formData.get("name"));
    const type = String(formData.get("type"));
    const breed = String(formData.get("breed"));
    const ownerId = formData.get("ownerId")
      ? String(formData.get("ownerId"))
      : null;

    const owner = ownerId
      ? petOwnerStore.owners.find((o) => o.id === ownerId) || null
      : null;

    const pet: Pet = { id, name, type, breed, owner };
    petOwnerStore.createPet(pet);
    console.log("Pet added:", pet);
    e.currentTarget.reset();
  };

  const handleDeletePet = (id: string) => {
    petOwnerStore.deletePet(id);
    console.log("Pet deleted:", id);
  };

  const handleUpdatePet = (id: string) => {
    petOwnerStore.updatePet(id, { name: "UpdatedPet" });
    console.log("Pet updated:", id);
  };

  return (
    <div>
      <h2>Pets Management</h2>
      <form onSubmit={handleAddPet}>
        <input name="name" type="text" placeholder="Name" required />
        <input name="type" type="text" placeholder="Type" required />
        <input name="breed" type="text" placeholder="Breed" required />
        <input name="ownerId" type="string" placeholder="Owner ID (optional)" />
        <button type="submit">Add Pet</button>
      </form>

      <h3>Pets List</h3>
      <ul>
        {petOwnerStore.pets.map((pet) => (
          <li key={pet.id}>
            {pet.name} ({pet.type}, {pet.breed}){" "}
            {pet.owner ? `Owner: ${pet.owner.firstName}` : "No owner"}
            <button onClick={() => handleUpdatePet(pet.id)}>Update</button>
            <button onClick={() => handleDeletePet(pet.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
});
