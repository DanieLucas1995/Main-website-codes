<?php
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nome = $_POST["nome"];
  $email = $_POST["email"];
  $mensagem = $_POST["mensagem"];

  $to = "danielucas_vasquesantos@live.com, daniel1995.lvs@gmail.com, vasquesantos@gestaopublica.etc.br";
  $subject = "Contato do site - $nome";
  $headers = "From: $email" . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

  if (mail($to, $subject, $mensagem, $headers)) {
    $response = array("status" => "success", "message" => "Enviado com sucesso!");
  } else {
    $response = array("status" => "error", "message" => "Houve um problema ao enviar o email. Por favor, tente novamente mais tarde.");
  }

  echo json_encode($response);
}
?>
