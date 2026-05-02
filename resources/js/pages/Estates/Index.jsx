import React from 'react';
import { useForm } from '@inertiajs/react';

export default function Index({ estates }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        location: '',
        area_sqm: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/estates', { onSuccess: () => reset() });
    };

    return (
        <div style={{ maxWidth: '800px', margin: '20px auto', fontFamily: 'sans-serif' }}>
            <h1>Каталог історичних об'єктів</h1>
            
            <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Назва об'єкта:</label>
                    <input 
                        type="text" 
                        value={data.title} 
                        onChange={e => setData('title', e.target.value)} 
                        style={{ width: '100%' }} 
                    />
                    {errors.title && <span style={{ color: 'red' }}>{errors.title}</span>}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Локація:</label>
                    <input 
                        type="text" 
                        value={data.location} 
                        onChange={e => setData('location', e.target.value)} 
                        style={{ width: '100%' }} 
                    />
                    {errors.location && <span style={{ color: 'red' }}>{errors.location}</span>}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Площа (м²):</label>
                    <input 
                        type="number" 
                        value={data.area_sqm} 
                        onChange={e => setData('area_sqm', e.target.value)} 
                        style={{ width: '100%' }} 
                    />
                    {errors.area_sqm && <span style={{ color: 'red' }}>{errors.area_sqm}</span>}
                </div>
                <button type="submit" disabled={processing}>Додати об'єкт</button>
            </form>

            <table border={1} cellPadding={10} style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr><th>ID</th><th>Назва</th><th>Локація</th><th>Площа (м²)</th></tr>
                </thead>
                <tbody>
                    {estates && estates.length > 0 ? (
                        estates.map((estate) => (
                            <tr key={estate.id}>
                                <td>{estate.id}</td>
                                <td>{estate.title}</td>
                                <td>{estate.location}</td>
                                <td>{estate.area_sqm}</td>
                            </tr>
                        ))
                    ) : (
                        <tr><td colSpan="4" style={{ textAlign: 'center' }}>Немає записів</td></tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}