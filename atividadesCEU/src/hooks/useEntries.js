import {useEffect, useState} from 'react'

import {
    getEntries,
    addEntry,
    updateEntry,
    deleteEntry,
} from '../services/Entries'

const useEntries = (category) => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const loadEntries = async () => {
            const data = await getEntries(category);
            setEntries(data);
        };

        loadEntries();

    }, [category]);
return [entries, addEntry, updateEntry, deleteEntry];
};

export default useEntries;