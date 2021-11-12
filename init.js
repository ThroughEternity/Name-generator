
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    let firstName = initPerson.firstName;
    let gender = initPerson.gender;
    let work = initPerson.profession;
    let randomDate = initPerson.randomDate;
    let surnameName = (gender == 'Мужчина') ? `${initPerson.surnameName}` : `${initPerson.surnameName}a`;
    let middleName = (gender == 'Мужчина') ? `${initPerson.middleName}ич` : `${initPerson.middleName}на`;
    document.getElementById('firstNameOutput').innerText = `${firstName}`;
    document.getElementById('surnameOutput').innerText = ` ${surnameName}`;
    document.getElementById('genderOutput').innerText = `пол ${gender}`;
    document.getElementById('birthYearOutput').innerText = `Дата рождения ${randomDate}`;
    document.getElementById('middleNameOutput').innerText = `${middleName}`;
    document.getElementById('workOutput').innerText = `Профессия ${work}`;

};

