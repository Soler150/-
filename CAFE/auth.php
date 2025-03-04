<?php
// Подключение к базе данных
$host = 'localhost'; // Хост
$db   = 'cafe_minutka'; // Имя базы данных
$user = 'root'; // Имя пользователя базы данных
$pass = ''; // Пароль
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}

// Обработка запросов
$action = $_POST['action'];

if ($action == 'register') {
    // Регистрация
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Проверка, существует ли пользователь
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);
    if ($stmt->rowCount() > 0) {
        echo json_encode(['status' => 'error', 'message' => 'Пользователь уже существует']);
    } else {
        // Вставка нового пользователя
        $stmt = $pdo->prepare("INSERT INTO users (email, password) VALUES (?, ?)");
        $stmt->execute([$email, $password]);
        echo json_encode(['status' => 'success', 'message' => 'Регистрация успешна']);
    }
} elseif ($action == 'login') {
    // Авторизация
    $email = $_POST['email'];
    $password = $_POST['password'];

    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password'])) {
        echo json_encode(['status' => 'success', 'message' => 'Вход успешен']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Неправильный email или пароль']);
    }
}
?>
