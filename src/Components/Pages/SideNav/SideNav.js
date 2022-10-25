import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const { categories, setCategories } = useState([]);

    useEffect(() => {
        fetch('https://tech-educa-three.vercel.app/courses')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>
            {
                categories.map(category => <p key={category.id}>
                    <Link>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default SideNav;