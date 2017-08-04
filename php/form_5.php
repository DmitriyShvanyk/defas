<?php
header("Content-Type: text/html; charset=utf-8");
session_start();

if( isset($_POST['fname_5']))
{
	
	$fname = htmlspecialchars($_POST["fname_5"]);     
    $phone = htmlspecialchars($_POST["phone_5"]);  
    $email = htmlspecialchars($_POST["email_5"]);
	
	$to = 'soledar10@meta.ua'; 
	$subject = 'Заказ с сайта';	
	$headers = "From:".htmlspecialchars($_POST["fname_5"])." <".htmlspecialchars($_POST["email_5"]).">\r\n" . 'Reply-To: ' .htmlspecialchars($_POST["email_5"]). "\r\n";
	$headers .= "Content-type: text/plain; charset=\"utf-8\"\r\n";
	$headers .= "Return-path: <".$email.">\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$message .= 'ИМЯ: ' . $_POST['fname_5'] . "\n" .
				'EMAIL: ' . $_POST['email_5'] . "\n" . 
				'ТЕЛЕФОН : ' . $_POST['phone_5'];
	
	mail($to, $subject, $message, $headers);	
	
	if( isset($_POST['email_5']))
	{
        $to = $_POST['email_5'];	
        $subject = 'Заказ с сайта';        
		//$headers = 'From: <'.$email.'>' . "\r\n";
		$headers = "From:".htmlspecialchars($_POST["fname_5"])." <".htmlspecialchars($_POST["email_5"]).">\r\n" . 'Reply-To: ' .htmlspecialchars($_POST["email_5"]). "\r\n";
		$headers .= "Content-type: text/plain; charset=\"utf-8\"\r\n";
		$headers .= "Return-path: <".$email.">\r\n";
		$headers .= "MIME-Version: 1.0\r\n";
        $message .= '
		
Добрый день,
Поздравляем, что вы приняли правильное решение, чтоб защитить своих
близких и свое имущество!
  
Мы получили ваш заказ.
  
Наши специалисты по работе с клиентами рассмотрят ваш заказ и начнут его выполнять в ближайшее время.

О сроках доставки товара мы дополнительно сообщим вам на вашу электронную почту или по телефону.

В случае возникновения дополнительных вопросов, обязательно обращайтесь!

  Защита окон - Дефас команда.
  Компания Дефас.
  Мы защитим ваши окна от воров по всей России!!!
  http://www.ochranaokon.ru/ 
  тел.: +7 968 060 82 83';
        mail($to, $subject, $message, iconv('utf-8', 'windows-1251', $headers));
	}
	echo '<p style="color:green; text-align:center; font-size:0px;"><b></b></p>';
}
	
?>