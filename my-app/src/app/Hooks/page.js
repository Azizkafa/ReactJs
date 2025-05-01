import {Counter, DataFetcher, ThemedComponent} from "@/app/components/HooksComponent"
import { StorageLocal } from "@/app/components/LocalStorage"

export default function Page(){
    return(
        <div>
            <DataFetcher />
            <ThemedComponent />
            <Counter />
            <StorageLocal />
        </div>
    )
}