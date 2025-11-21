import { type FormEvent } from "react";
import { observer } from "mobx-react-lite";
import { petOwnerStore, type Owner } from "./PetOwnerStore";

export const OwnersList = observer(() => {
  const handleAddOwner = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = String(formData.get("firstName"));
    const lastName = String(formData.get("lastName"));

    petOwnerStore.createOwner({ firstName, lastName } as Owner);
    console.log("Owner added:", {  firstName, lastName });
    e.currentTarget.reset();
  };

  const handleDeleteOwner = (id: string) => {
    petOwnerStore.deleteOwner(id);
    console.log("Owner deleted:", id);
  };

  const handleUpdateOwner = (id: string) => {
    petOwnerStore.updateOwner(id, { firstName: "Updated", lastName: "Owner" });
    console.log("Owner updated:", id);
  };

  return (
    <div>
      <h2>Owners Management</h2>
      <form onSubmit={handleAddOwner}>
        <input name="firstName" type="text" placeholder="First Name" required />
        <input name="lastName" type="text" placeholder="Last Name" required />
        <button type="submit">Add Owner</button>
      </form>

      <h3>Owners List</h3>
      <ul>
        {petOwnerStore.owners.map((owner) => (
          <li key={owner.id}>
            {owner.firstName} {owner.lastName} (id: {owner.id})
            <button onClick={() => handleUpdateOwner(owner.id)}>Update</button>
            <button onClick={() => handleDeleteOwner(owner.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
});
