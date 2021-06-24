import {useEffect, useState} from 'react';

import {
    updateUser,
} from '../services/Users';

import {
    getUser,
} from '../services/Auth';

const useUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const loadUsers = async () => {
            const data = await getUser();
            setUsers(data);

            console.log('user::data', JSON.stringify(data))
        };
        loadUsers();
    }, []);

    return [users, updateUser];

};

export default useUsers;