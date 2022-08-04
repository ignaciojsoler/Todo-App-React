const removeAccents = () => {
    const str = 'ÁÉÍÓÚáéíóúâêîôûàèìòùÇç';
    const parsed = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    console.log(parsed);
};

export default removeAccents;