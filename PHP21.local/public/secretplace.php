<?php
session_start();

if (!isset($_SESSION['authenticated']) || !$_SESSION['authenticated']) {
    header('Location: index.php');
    exit;
}

// Обработка выхода
if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: index.php');
    exit;
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Секретная страница</title>
</head>
<body>
    <h1 style="font-size: 20px;">Добро пожаловать в секретное место!</h1>
    <p>Здесь хранятся все секреты вселенной.</p>
    <a style="text-decoration: none" href="secretplace.php?logout=1">Выйти</a>
</body>
</html>