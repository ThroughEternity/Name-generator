const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    middleName: `{
        "count": 10,
        "list": {
            "id_1": "Анатолиев",
            "id_2": "Григорьев",
            "id_3": "Леонидов",
            "id_4": "Станиславов",
            "id_5": "Викторов",
            "id_6": "Брониславов",
            "id_7": "Романов",
            "id_8": "Федоров",
            "id_9": "Ярославов",
            "id_10": "Леонидов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNamefemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Елизавета",
            "id_2": "Люся",
            "id_3": "Гертруда",
            "id_4": "Виолетта",
            "id_5": "Надежда",
            "id_6": "Ксения",
            "id_7": "Александра",
            "id_8": "Анастасия",
            "id_9": "Валентина",
            "id_10": "Мария"
        }
    }`,

    genderJson: `{
        "count": 2,
        "list": {
            "id_1": "Мужчина",
            "id_2": "Женщина"
        }
    }`,

    professionFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Водитель",
            "id_2": "Инженер",
            "id_3": "Тренер",
            "id_4": "Повар",
            "id_5": "Дизайнер",
            "id_6": "Парикмахер",
            "id_7": "Строитель",
            "id_8": "Медсестра",
            "id_9": "Водитель трамвая",
            "id_10": "Продавец"
        }
    }`,

    professionMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Пожарный",
            "id_2": "Лётчик",
            "id_3": "Полицейский",
            "id_4": "Строитель",
            "id_5": "Шахтёр",
            "id_6": "Слесарь",
            "id_7": "Сварщик",
            "id_8": "Капитан рыболовного судна",
            "id_9": "Машинист",
            "id_10": "Механик"
        }
    }`,

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomJson: function(objJson) {

        return this.randomValue(objJson);

    },

    randomDate: function() {
        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }
        var date1 = date1 || '01-01-1970'
        var date2 = date2 || '01-01-2001'
        var date2 = date2 || new Date().toLocaleDateString();
        date1 = new Date(date1).getTime()
        date2 = new Date(date2).getTime()
        if (date1 > date2) {
            return new Date(getRandomArbitrary(date2, date1)).toLocaleDateString('ru', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
        } else {
            return new Date(getRandomArbitrary(date1, date2)).toLocaleDateString('ru', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })

        }
    },





    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomJson(this.genderJson);
        if (this.person.gender == 'Мужчина') {
            this.person.firstName = this.randomJson(this.firstNameMaleJson);
            this.person.profession = this.randomJson(this.professionMaleJson);
        } else {
            this.person.firstName = this.randomJson(this.firstNamefemaleJson);
            this.person.profession = this.randomJson(this.professionFemaleJson);

        }
        this.person.middleName = this.randomJson(this.middleName);
        this.person.surnameName = this.randomJson(this.surnameJson);
        this.person.randomDate = this.randomDate();
        return this.person;
    }
};
