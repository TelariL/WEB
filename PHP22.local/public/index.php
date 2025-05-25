<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
    <title>Тестирование - Вопрос 1</title>
</head>
<body>
    <h1>Тестирование по веб-программированию</h1>
    <h2>Вопрос 1 из 5</h2>
    <p>Какой тег HTML используется для создания формы?</p>
    <form action="test2.php" method="post">
        <input type="radio" name="answer1" value="<form>"> &lt;form&gt;<br>
        <input type="radio" name="answer1" value="<input>"> &lt;input&gt;<br>
        <input type="radio" name="answer1" value="<div>"> &lt;div&gt;<br>
        <input type="radio" name="answer1" value="<section>"> &lt;section&gt;<br>
        <input type="submit" value="Далее">
    </form>
</body>
</html>