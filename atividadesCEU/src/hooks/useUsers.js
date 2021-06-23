import {useEffect, useState} from 'react';

import {
    updateUser,
} from '../services/Users';

const useUsers = () => {

    return [updateUser];

};

export default useUsers;