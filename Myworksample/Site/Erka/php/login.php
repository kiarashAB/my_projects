<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ورود به سایت</title>
    <link rel="stylesheet" href="../font/font.css">
</head>

<body>
    <style>
        * {
            box-sizing: border-box;
            outline: 0;
            margin: 0;
            padding: 0;
        }

        body {
            background: linear-gradient(128deg, rgba(245, 255, 163, 1) 0%, rgba(203, 255, 254, 1) 70%);
        }

        .center {
            display: flex;
            justify-content: center;
            text-align: center;
            margin-top: 200px;
        }

        .box {
            width: 900px;
            height: 200px;
            background-color: rgba(255, 255, 255, 0.26);
            backdrop-filter: blur(100px);
            transition: all 0.5s;
            color: green;
            border-radius: 25px;

        }

        .item {
            display: flex;
            flex-direction: column;
            gap: 30px;
            margin-top: 60px;
            font-size: 30px;
        }

        button {
            width: 170px;
            height: 35px;
            font-family: inherit;
            font-size: 20px;
            border-radius: 10px;
            background-color: #f3f3f35b;
            border: none;
            outline: 1px solid #6f3d99;
            transition: all 0.5s;
            cursor: pointer;
            background-color: rgba(255, 255, 255, 0.26);
            backdrop-filter: blur(100px);
        }

        button:hover {
            width: 450px;
            height: 50px;
            outline: 3px #6f3d99;
            box-shadow: 1px 1px 29px #6f3d99;
        }

        .box:hover{
            width: 1000px;
            height: 240px;
            outline: 3px #6f3d99;
            box-shadow: 1px 1px 69px rgba(112, 61, 153, 0.45);
        }

    </style>
    <div class="center">
        <div class="box">
            <div class="item">
                <?php
                require_once('databasse.php');

                if (isset($_POST['SingUp'])) {
                    try {
                        $username = $_POST['text'];
                        $password = $_POST['password'];
                        $email = $_POST['email'];

                        $query = "INSERT INTO users SET username=?, password=?, email=?";


                        $stmt = $conn->prepare($query);

                        $stmt->bindvalue(1, $username);
                        $stmt->bindvalue(2, $password);
                        $stmt->bindvalue(3, $email);
                        $stmt->execute();

                        echo "ok";
                        header('location: ../home.htm');
                    } catch (PDOException $e) {
                        echo "eror" . $e->getMessage();
                    }
                }

                if (isset($_POST['Singin'])) {
                    try {
                        $key = $_POST['key'];
                        $password = $_POST['password'];

                        $query = "SELECT * FROM `users` WHERE (username = :key OR email= :key) AND (password = :password) LIMIT 1";


                        $stmt = $conn->prepare($query);

                        $stmt->bindvalue(":key", $key);
                        $stmt->bindvalue(":password", $password);

                        $stmt->execute();

                        $deta = $stmt->rowCount();

                        if ($deta) {
                            echo " با موفقیت وارد شدی ";
                        } else {
                            echo " رمز یا ایمیل اشتبا ";
                        }
                        //   echo "ok";
                        //   header('location: ../home.htm');
                    } catch (PDOException $e) {
                        echo "eror" . $e->getMessage();
                    }
                }

                ?>
                <a href="../home.htm"><button>رفتن به صفحه اصلی</button></a>
            </div>
        </div>
    </div>
</body>

</html>