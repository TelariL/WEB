<?php
session_start();

// Проверяем, не заблокирован ли пользователь
if (isset($_SESSION['login_attempts']) && $_SESSION['login_attempts'] >= 3) {
    $block_time = 60; // 60 секунд блокировки
    $time_elapsed = time() - $_SESSION['last_attempt_time'];
    
    if ($time_elapsed < $block_time) {
        $remaining_time = $block_time - $time_elapsed;
        ?>
        <!DOCTYPE html>
        <html>
        <head>
            <title>Блокировка входа</title>
            <script>
            function updateTimer() {
                let timeLeft = <?php echo $remaining_time; ?>;
                const timerElement = document.getElementById('timer');
                
                const timerInterval = setInterval(() => {
                    timeLeft--;
                    timerElement.textContent = timeLeft;
                    
                    if (timeLeft <= 0) {
                        clearInterval(timerInterval);
                        window.location.reload();
                    }
                }, 1000);
            }
            
            window.onload = updateTimer;
            </script>
        </head>
        <body>
            <h2>Превышено количество попыток входа</h2>
            <p>Пожалуйста, попробуйте снова через <span id="timer"><?php echo $remaining_time; ?></span> секунд</p>
        </body>
        </html>
        <?php
        exit;
    } else {
        // Сброс счетчика после истечения времени
        unset($_SESSION['login_attempts']);
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Авторизация</title>
</head>
<body>
    <h2 style="margin-bottom: 10px">Введите логин и пароль</h2>
    <?php if (isset($_GET['error'])): ?>
        <p style="color: red;">
            Неверный логин или пароль. 
            Попытка <?php echo $_SESSION['login_attempts'] ?? 1; ?> из 3
        </p>
    <?php endif; ?>
    <form action="authorize.php" method="post">
        Логин:  <input type="text" name="login" style="width: 176px"><br>
        <p style="margin-top: -10px"></p>
        Пароль: <input type="password" name="password"><br>
        <p style="margin-top: -10px"></p>
        <input type="submit" value="Войти">
    </form>
</body>
</html>