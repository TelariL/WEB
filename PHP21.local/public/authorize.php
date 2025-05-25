<?php
session_start();

// Правильные учетные данные (обычно хранятся в БД)
$valid_login = 'admin';
$valid_password = 'password';

// Инициализация счетчика попыток
if (!isset($_SESSION['login_attempts'])) {
    $_SESSION['login_attempts'] = 0;
}

// Проверка блокировки
if ($_SESSION['login_attempts'] >= 3 && time() - $_SESSION['last_attempt_time'] < 60) {
    header('Location: index.php');
    exit;
}

// Проверка учетных данных
if ($_POST['login'] === $valid_login && $_POST['password'] === $valid_password) {
    // Успешная авторизация
    unset($_SESSION['login_attempts']);
    $_SESSION['authenticated'] = true;
    header('Location: secretplace.php');
    exit;
} else {
    // Неудачная попытка
    $_SESSION['login_attempts']++;
    $_SESSION['last_attempt_time'] = time();
    
    if ($_SESSION['login_attempts'] >= 3) {
        // После 3 попыток блокируем на 1 минуту
        header('Location: index.php');
    } else {
        // Меньше 3 попыток - возвращаем с ошибкой
        header('Location: index.php?error=1');
    }
    exit;
}
?>