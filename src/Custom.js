import { useState } from 'react';

function useCustomHook() {
    const [salary, setSalary] = useState(0);

    const increment = () => {
        setSalary(salary + 500)
    }
    return [salary, increment]
}



export default useCustomHook