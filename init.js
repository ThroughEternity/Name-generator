
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    let randomDate = initPerson.randomDate;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('birthYearOutput').innerText = `Дата рождения ${randomDate}`;
};

