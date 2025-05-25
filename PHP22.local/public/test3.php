<?php
session_start();
if (isset($_POST['answer2'])) {
    $_SESSION['answer2'] = $_POST['answer2'];
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Тестирование - Вопрос 3</title>
</head>
<body>
    <h1>Тестирование по программированию</h1>
    <h2>Вопрос 3 из 5</h2>
    <p>Какой оператор используется для сравнения по значению и типу в PHP?</p>
    <form action="test4.php" method="post">
        <input type="radio" name="answer3" value="=="> ==<br>
        <input type="radio" name="answer3" value="==="> ===<br>
        <input type="radio" name="answer3" value="="> =<br>
        <input type="radio" name="answer3" value="!="> !=<br>
        <input type="submit" value="Далее">
    </form>
</body>
</html>