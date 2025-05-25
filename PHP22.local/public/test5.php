<?php
session_start();
if (isset($_POST['answer4'])) {
    $_SESSION['answer4'] = $_POST['answer4'];
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Тестирование - Вопрос 5</title>
</head>
<body>
    <h1>Тестирование по программированию</h1>
    <h2>Вопрос 5 из 5</h2>
    <p>Какой тег HTML используется для создания ссылки?</p>
    <form action="result.php" method="post">
        <input type="radio" name="answer5" value="<a>"> &lt;a&gt;<br>
        <input type="radio" name="answer5" value="<link>"> &lt;link&gt;<br>
        <input type="radio" name="answer5" value="<href>"> &lt;href&gt;<br>
        <input type="radio" name="answer5" value="<url>"> &lt;url&gt;<br>
        <input type="submit" value="Завершить тест">
    </form>
</body>
</html>