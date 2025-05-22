
document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Очистка ошибок и снятие выделения
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    document.querySelectorAll("input, textarea, select").forEach(el => el.classList.remove("invalid"));

    const login = document.getElementById("login");
    const name = document.getElementById("name");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const email = document.getElementById("email");
    const dob = document.getElementById("dob");
    const about = document.getElementById("about");
    const skills = document.getElementById("skills");
    const experience = document.getElementById("experience");

    let valid = true;

    if (!/^[a-zA-Z0-9]{3,16}$/.test(login.value)) {
        document.getElementById("loginError").textContent = "Логин: от 3 до 16 латинских букв и цифр.";
        login.classList.add("invalid");
        valid = false;
    }

    if (!/^[А-Яа-яЁё]+([\s-][А-Яа-яЁё]+)*$/.test(name.value)) {
        document.getElementById("nameError").textContent = "Имя: только кириллица, допустимы пробелы и дефисы.";
        name.classList.add("invalid");
        valid = false;
    }

    const passRegex = /^(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*\d)(?=.*[~!?@#$%^&*_\-+()\[\]{}<>\/\\|\"'.:,;]).{8,128}$/;
    if (!passRegex.test(password.value)) {
        document.getElementById("passwordError").textContent = "Пароль: 8-128 символов, минимум 1 строчная, 1 заглавная, 1 цифра, 1 спецсимвол.";
        password.classList.add("invalid");
        valid = false;
    }

    if (password.value !== confirmPassword.value) {
        document.getElementById("confirmError").textContent = "Пароли не совпадают.";
        confirmPassword.classList.add("invalid");
        valid = false;
    }

    const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if (email.value && !emailRegex.test(email.value)) {
        email.classList.add("invalid");
        const error = document.createElement("div");
        error.textContent = "Email некорректен.";
        email.insertAdjacentElement("afterend", error);
        error.classList.add("error");
        valid = false;
    }

    if (dob.value && new Date(dob.value) > new Date()) {
        dob.classList.add("invalid");
        const error = document.createElement("div");
        error.textContent = "Дата рождения не может быть в будущем.";
        dob.insertAdjacentElement("afterend", error);
        error.classList.add("error");
        valid = false;
    }

    if (about.value.trim().length < 20) {
        about.classList.add("invalid");
        const error = document.createElement("div");
        error.textContent = "Поле 'О себе' должно содержать минимум 20 символов.";
        about.insertAdjacentElement("afterend", error);
        error.classList.add("error");
        valid = false;
    }

    if (skills.value.trim().length < 20) {
        skills.classList.add("invalid");
        const error = document.createElement("div");
        error.textContent = "Поле 'Навыки' должно содержать минимум 20 символов.";
        skills.insertAdjacentElement("afterend", error);
        error.classList.add("error");
        valid = false;
    }

    if (experience.value && experience.value < 0) {
        experience.classList.add("invalid");
        const error = document.createElement("div");
        error.textContent = "Опыт работы не может быть отрицательным.";
        experience.insertAdjacentElement("afterend", error);
        error.classList.add("error");
        valid = false;
    }

    if (valid) {
        this.reset();
    }
});