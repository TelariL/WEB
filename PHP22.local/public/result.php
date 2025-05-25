<?php
session_start();

if (isset($_POST['answer5'])) {
    $_SESSION['answer5'] = $_POST['answer5'];
}

$correct_answers = [
    'answer1' => '<form>',
    'answer2' => '25',
    'answer3' => '===',
    'answer4' => 'POST',
    'answer5' => '<a>'
];

$score = 0;
$results = [];

foreach ($correct_answers as $question => $correct_answer) {
    if (isset($_SESSION[$question])) {
        $user_answer = $_SESSION[$question];
        $is_correct = ($user_answer == $correct_answer);
        $results[$question] = [
            'user_answer' => $user_answer,
            'correct_answer' => $correct_answer,
            'is_correct' => $is_correct
        ];
        if ($is_correct) {
            $score++;
        }
    }
}

session_unset();
session_destroy();
?>
<!DOCTYPE html>
<html>
<head>
    <title>Результаты тестирования</title>
    <style>
        .correct { color: green; }
        .incorrect { color: red; }
    </style>
</head>
<body>
    <h1>Результаты тестирования</h1>
    <p>Ваш результат: <?php echo $score; ?> из 5</p>
    
    <h2>Детализация ответов:</h2>
    <?php foreach ($results as $question => $data): ?>
        <div class="<?php echo $data['is_correct'] ? 'correct' : 'incorrect'; ?>">
            <p><strong>Вопрос <?php echo substr($question, -1); ?>:</strong></p>
            <p>Ваш ответ: <?php echo htmlspecialchars($data['user_answer']); ?></p>
            <p>Правильный ответ: <?php echo htmlspecialchars($data['correct_answer']); ?></p>
        </div>
        <hr>
    <?php endforeach; ?>
</body>
</html>