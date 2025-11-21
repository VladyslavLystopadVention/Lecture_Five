import { v4 as uuidv4 } from "uuid";
import { action, computed, observable, makeObservable, runInAction } from "mobx";

export interface Owner {
  id: string;
  firstName: string;
  lastName: string;
}

export interface Pet {
  id: string;
  name: string;
  type: string;
  breed: string;
  owner: Owner | null;
}

export class PetOwnerStore {
  pets: Pet[] = [];
  owners: Owner[] = [];

  constructor() {
    makeObservable(this, {
      pets: observable,
      owners: observable,
      totalOwners: computed,
      totalPets: computed,
      getPetsByOwner: action,
      createPet: action,
      createOwner: action,
      updatePet: action,
      updateOwner: action,
      deletePet: action,
      deleteOwner: action,
      assignOwnerToPet: action
    });

    runInAction(() => this.prefetchData());
  }

  createPet(pet: Omit<Pet, "id">) {
    this.pets.push({ ...pet, id: uuidv4() });
  }

  createOwner(owner: Omit<Owner, "id">) {
    this.owners.push({ ...owner, id: uuidv4() });
  }

  updateOwner(ownerid: string, update: Partial<Owner>) {
    const ownerIndex = this.owners.findIndex((owner) => owner.id === ownerid);
    if (ownerIndex > -1) {
      this.owners[ownerIndex] = { ...this.owners[ownerIndex], ...update };
    }
  }

  updatePet(petid: string, update: Partial<Pet>) {
    const petIndex = this.pets.findIndex((pet) => pet.id === petid);
    if (petIndex > -1) {
      this.pets[petIndex] = { ...this.pets[petIndex], ...update };
    }
  }

  deletePet(petid: string) {
    this.pets = this.pets.filter((pet) => pet.id !== petid);
  }

  deleteOwner(ownerid: string) {
    this.owners = this.owners.filter((owner) => owner.id !== ownerid);
  }

  get totalOwners(): number {
    return this.owners.length;
  }

  get totalPets(): number {
    return this.pets.length;
  }

  getPetsByOwner(ownerid: string): Pet[] {
    return this.pets.filter((pet) => pet.owner && pet.owner.id === ownerid);
  }

  assignOwnerToPet(ownerid: string, petid: string) {
    const petIndex = this.pets.findIndex((pet) => pet.id === petid);
    const ownerIndex = this.owners.findIndex((owner) => owner.id === ownerid);
    if (petIndex > -1 && ownerIndex > -1) {
      this.pets[petIndex].owner = this.owners[ownerIndex];
    }
  }

  prefetchData = () => {
    const owner: Owner = { firstName: "Aleem", lastName: "Isiaka", id: uuidv4() };
    this.createOwner(owner);

    const pets: Omit<Pet, "id">[] = [
      {
        name: "Lincy",
        breed: "Siamese",
        type: "Cat",
        owner: owner
      },
    ];

    setTimeout(() => {
      console.log("Fetch complete update store");
      pets.forEach((pet) => {
        this.createPet(pet);
        if (pet.owner) {
          const createdPet = this.pets[this.pets.length - 1];
          this.assignOwnerToPet(pet.owner.id, createdPet.id);
        }
      });
    }, 3000);
  };
}

export const petOwnerStore = new PetOwnerStore();
