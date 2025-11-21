import { OwnersList } from "../MobX/OwnersList";
import { PetsList } from "../MobX/PetsList";
import type { FC } from "react";

export const PetsOwners: FC = () => {

    return (
        <>
            <section>
                <PetsList />
                <OwnersList  />
            </section>
        </>
    )
}