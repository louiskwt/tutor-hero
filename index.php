<?php
  $nav = __DIR__ . "/template/navbar.php";
  $hero = __DIR__ . "/template/hero.php";
?>

<!doctype html>
<html lang="zh-HK" data-bs-theme="dark">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- generics -->
<link rel="icon" href="https://cdn.jsdelivr.net/gh/louiskwt/starchaser-static/icons/icon-96.png
" sizes="96x96">
<link rel="icon" href="https://cdn.jsdelivr.net/gh/louiskwt/starchaser-static/icons/icon-128.png
" sizes="128x128">
<link rel="icon" href="https://cdn.jsdelivr.net/gh/louiskwt/starchaser-static/icons/icon-192.png
" sizes="192x192">

<!-- Android -->
<link rel="shortcut icon" sizes="196x196" href=“https://cdn.jsdelivr.net/gh/louiskwt/starchaser-static/icons/icon-196.png
">

<!-- iOS -->
<link rel="apple-touch-icon" href="https://cdn.jsdelivr.net/gh/louiskwt/starchaser-static/icons/icon-120.png
" sizes="120x120">


    <title>StarChaser | 線上英文學習平台</title>
    <meta content="線上 DSE 英文 及 IELTS 考試學習平台，提供練習及公開課程去幫你備考" name="description">
    <meta content="線上 DSE 英文 及 IELTS 考試學習平台，提供練習及公開課程去幫你備考" property="og:description">
    <meta content="StarChaser | 線上英文學習平台" property="og:title">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
  </head>

  <body>
  <?php include $nav; ?>
  <?php include $hero; ?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
  </body>
</html>
