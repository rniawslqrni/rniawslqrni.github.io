<?php
error_reporting(0);

    $messager = "testing";

$token = "6853056186:AAGCAXwvylYiU85Q5zlfwzPrqvUuN1t4o3A";
$chatid = "515706412";
sendMessage($chatid, "$messager", $token);
function sendMessage($chatID, $messaggio, $token) {
    $url = "https://api.telegram.org/bot" . $token . "/sendMessage?chat_id=" . $chatID;
    $url = $url . "&text=" . urlencode($messaggio);
    $ch = curl_init();
    $optArray = array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true
    );
    curl_setopt_array($ch, $optArray);
    $result = curl_exec($ch);
    curl_close($ch);
    return $result;
    }
    ?>
