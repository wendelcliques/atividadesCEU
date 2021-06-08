import {useEffect, useState } from 'react';

import {
    getAllCategories,
} from '../services/Categories';

const useCategories = () => {
    const [allCategories, setAllCategories] = useState();

    useEffect(() => {
        const loadAllCategories = async () => {
            const data = await getAllCategories();
            setAllCategories(data);
        };
        loadAllCategories();
    }, []);
return [allCategories];
};

export default useCategories;