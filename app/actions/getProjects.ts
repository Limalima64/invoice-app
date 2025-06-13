
//Pour recuperer les projects du api/projets
import getCurrentUser from "./getCurrentUser";
import { SafeProject } from "@/types";

export default async function getProjects() {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }
      try {
        console.log("test");
        const res = await fetch("http://localhost:3000/api/projets");
      
        if (!res.ok) {
          throw new Error(`Erreur HTTP: ${res.status}`);
        }
      
        const data = await res.json();
        console.log("Projets reçus:", data);
        return data as SafeProject[];
      } catch (err) {
      console.error("Erreur lors du fetch des projets:", err);
      return [];
    }
}
