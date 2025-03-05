import { Client, Databases, ID, Query } from "appwrite";
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID);

const database = new Databases(client);


export const updateSearchCount = async (searchTerm, movie) => {
    if (!searchTerm) {
        console.warn('Attempted to update search count with a null or undefined searchTerm');
        return;
    }

    try {
        const result = await database.listDocuments(
            DATABASE_ID,
            COLLECTION_ID,
            [
                Query.equal('searchTerm', searchTerm),
            ],
        )

        if (result.documents.length > 0) {
            const doc = result.documents[0];

            if (!doc) {
                console.warn('No document found in the listDocuments result');
                return;
            }

            await database.updateDocument(
                DATABASE_ID,
                COLLECTION_ID,
                doc.$id,
                {
                    count: doc.count + 1,
                }
            )
        } else {
            if (!movie || !movie.id || !movie.poster_path) {
                console.warn('Attempted to update search count with a null or undefined movie');
                return;
            }

            await database.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                {
                    searchTerm,
                    count: 1,
                    movie_id: movie.id,
                    poster_url: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                }
            )
        }
    } catch (error) {
        console.error('Error updating search count:', error);
    }
}
