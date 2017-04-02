<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];

$to = 'naul.gs@gmail.com';
$message = 'FROM: '.$name.' Email: '.$email.' Message: '.$message;
$headers = 'From: ContatoSite@domain.com' . "\r\n";
 
if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // this line checks that we have a valid email address
mail($to, $subject, $message, $headers); //This method sends the mail.
echo "Sua mensagem foi enviada com sucesso!"; // success message
}else{
echo "Email inválido, por favor coloque um email válido.";
}

?>